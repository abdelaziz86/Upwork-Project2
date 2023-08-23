<?php
session_start() ; 
$logged = 0 ; 
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Replace with your database connection details
    require_once 'connect.php' ; 

    $query = $db->prepare("SELECT * FROM user WHERE username = :username AND password = :password");
    $query->execute(array(':username' => $username, ':password' => $password));
    
    $user = $query->fetch(PDO::FETCH_ASSOC);
    
    if ($user) {
       $logged = 2; 
       $_SESSION['user'] = $user ; 
       //echo $_SESSION['user'] ; 
      header("Location : index.php") ; 
    } else {
    	$logged = 1 ; 
        
    }
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Form</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form method="post" action="login.php">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Enter username">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
              </div>
              <?php
                if ($logged==1) {
                  echo "
                    <p style='color : red ; '>Invalid credentials. </p>
                  " ; 
                }
              ?>
              
              <button type="submit" class="btn btn-primary" name="login">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
