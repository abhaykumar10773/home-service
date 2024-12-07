import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { Container } from 'react-bootstrap';

// Sample data
const bookings = [
  {
    id: 1,
    service: 'Cleaning Service',
    shift: 'Morning',
    providerName: 'John Doe',
    charges: '$50',
    status: 'Pending', // Can be 'Accepted' or 'Pending'
  },
  {
    id: 2,
    service: 'Plumbing Service',
    shift: 'Afternoon',
    providerName: 'Jane Smith',
    charges: '$70',
    status: 'Accepted',
  },
];

// Function to handle cancellation
function handleCancelBooking(bookingId) {
  console.log(`Canceling booking with ID: ${bookingId}`);
  // Here you could make an API call to cancel the booking
}

function BookingCard({ booking }) {
  // Ensure booking is defined and has the expected properties
  const {
    service = 'Service not available',
    shift = 'Not specified',
    providerName = 'Unknown',
    charges = 'N/A',
    status = 'Pending'
  } = booking || {}; // If booking is undefined, destructure with default values

  const isAccepted = status === 'Accepted';

  return (
    <Card sx={{ width: '100%', mb: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {service}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Shift: {shift}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Provider: {providerName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Charges: {charges}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Button 
            variant={isAccepted ? 'contained' : 'outlined'}
            color={isAccepted ? 'success' : 'warning'}
            sx={{ mr: 2 }}
          >
            {isAccepted ? 'Accepted by Provider' : 'Waiting for Confirmation'}
          </Button>

          {/* Conditionally render the Cancel button if booking is not accepted */}
          {!isAccepted && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleCancelBooking(booking.id)}
            >
              Cancel Booking
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

function Ubookings() {
  const ongoingBookings = bookings.filter(b => b.status === 'Pending');
  const confirmedBookings = bookings.filter(b => b.status === 'Accepted');
  const previousBookings = bookings.filter(b => b.status === 'Completed');

  return (
    <Container>
      <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mt: 3, mb: 4 }}>
        Booking Management Dashboard
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Ongoing Bookings
        </Typography>
        <Grid container spacing={2}>
          {ongoingBookings.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.id}>
              <BookingCard booking={booking} />
            </Grid>
          ))}
          {ongoingBookings.length === 0 && (
            <Typography variant="body1" color="textSecondary">
              There are no ongoing bookings at the moment.
            </Typography>
          )}
        </Grid>
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Confirmed Bookings
        </Typography>
        <Grid container spacing={2}>
          {confirmedBookings.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.id}>
              <BookingCard booking={booking} />
            </Grid>
          ))}
          {confirmedBookings.length === 0 && (
            <Typography variant="body1" color="textSecondary">
              No confirmed bookings yet.
            </Typography>
          )}
        </Grid>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>
          Previous Bookings
        </Typography>
        <Grid container spacing={2}>
          {previousBookings.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.id}>
              <BookingCard booking={booking} />
            </Grid>
          ))}
          {previousBookings.length === 0 && (
            <Typography variant="body1" color="textSecondary">
              No previous bookings found.
            </Typography>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default Ubookings;
