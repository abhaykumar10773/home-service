import React, { useState } from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Dialog, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const PbookingManagement = () => {
  const [upcomingBookings, setUpcomingBookings] = useState([
    {
      id: 1,
      userName: "John Doe",
      service: "Plumbing",
      location: "123 Main St",
      date: "2024-11-10",
      shift: "Morning",
      details: "Fix leaking pipes",
    },
    // Add more bookings here, or start with an empty array to test the message display
  ]);

  const [ongoingBookings, setOngoingBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([
    { id: 101, userName: "Jane Smith", service: "Electrician", payment: "$50", status: "Completed" },
    { id: 102, userName: "Mark Wilson", service: "Cleaning", payment: "$30", status: "Canceled" },
    // Add more completed bookings here
  ]);

  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rejectReason, setRejectReason] = useState("");

  // Handle Accept Booking
  const handleAcceptBooking = (booking) => {
    setOngoingBookings((prev) => [booking, ...prev]);
    setUpcomingBookings((prev) => prev.filter((b) => b.id !== booking.id));
  };

  // Handle Reject Booking
  const handleRejectBooking = (booking) => {
    setSelectedBooking(booking);
    setRejectDialogOpen(true);
  };

  const handleRejectConfirm = () => {
    if (selectedBooking) {
      setCompletedBookings((prev) => [
        { ...selectedBooking, status: "Rejected", reason: rejectReason },
        ...prev,
      ]);
      setUpcomingBookings((prev) => prev.filter((b) => b.id !== selectedBooking.id));
    }
    setRejectDialogOpen(false);
    setRejectReason("");
  };

  // Handle Mark Booking as Completed
  const handleCompleteBooking = (bookingId) => {
    const completedBooking = ongoingBookings.find((b) => b.id === bookingId);
    if (completedBooking) {
      setCompletedBookings((prev) => [{ ...completedBooking, status: "Completed" }, ...prev]);
      setOngoingBookings((prev) => prev.filter((b) => b.id !== bookingId));
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography   variant="h2"
      gutterBottom
      align="center"  
      sx={{
        fontWeight: 'bold',     
        color: 'primary.main',
      }}> My Booking Management </Typography>
               <hr></hr>
      {/* Upcoming Bookings Section */}
      <Typography variant="h5" sx={{ mt: 3 }} gutterBottom>Upcoming Bookings</Typography>
      {upcomingBookings.length > 0 ? (
        <Grid container spacing={2}>
          {upcomingBookings.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{booking.userName}</Typography>
                  <Typography variant="body1">Service: {booking.service}</Typography>
                  <Typography variant="body1">Location: {booking.location}</Typography>
                  <Typography variant="body1">Date: {booking.date}</Typography>
                  <Typography variant="body1">Shift: {booking.shift}</Typography>
                  <Typography variant="body2">Details: {booking.details}</Typography>
                  
                  <Button variant="contained" color="primary" sx={{ mt: 2, mr: 1 }} onClick={() => handleAcceptBooking(booking)}>Accept Booking</Button>
                  <Button variant="outlined" color="error" sx={{ mt: 2 }} onClick={() => handleRejectBooking(booking)}>Reject Booking</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Card sx={{ width: '100%', mt: 2 }}>
        <CardContent>
          <Typography variant="body1" color="textSecondary">
          There are no upcoming bookings at the moment.
          </Typography>
        </CardContent>
      </Card>
      )}

      {/* Reject Booking Dialog */}
      <Dialog open={rejectDialogOpen} onClose={() => setRejectDialogOpen(false)}>
        <Container sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>Reject Booking</Typography>
          <TextField
            label="Reason for Rejection"
            multiline
            rows={4}
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={handleRejectConfirm}>Confirm Rejection</Button>
        </Container>
      </Dialog>

      {/* Ongoing Bookings Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Ongoing Bookings</Typography>
      {ongoingBookings.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Shift</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ongoingBookings.map((booking) => (
                <TableRow key={booking.id} style={{ backgroundColor: "#e0f7e0" }}>
                  <TableCell>{booking.userName}</TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell>{booking.location}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.shift}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="success" onClick={() => handleCompleteBooking(booking.id)}>Mark as Completed</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Card sx={{ width: '100%', mt: 2 }}>
        <CardContent>
          <Typography variant="body1" color="textSecondary">
            There are no ongoing bookings at the moment.
          </Typography>
        </CardContent>
      </Card>
      )}

      {/* Completed Bookings Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>All Bookings</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completedBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.userName}</TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>{booking.payment}</TableCell>
                <TableCell>{booking.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PbookingManagement;
