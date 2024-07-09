<?php
// Assuming your PHP script starts here

// Connection parameters for MySQL (adjust as per your MySQL setup)
$servername = "localhost";
$username = "root"; // Default username for XAMPP MySQL
$password = ""; // Default password for XAMPP MySQL
$dbname = "exam"; // Name of your MySQL database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission (POST request)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usn = $_POST['usn']; // Assuming your form input name is 'usn'

    // Query to retrieve CGPA from MySQL database
    $sql = "SELECT cgpa FROM dsce WHERE usn = '$usn'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            $cgpa = $row["cgpa"];
            echo "CGPA for $usn: $cgpa";
        }
    } else {
        echo "No results found for the given USN";
    }
}

// Close MySQL connection
$conn->close();
?>
