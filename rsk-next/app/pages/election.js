<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Election</title>

    <!-- Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet" type="text/css" rel="stylesheet">
    <link href="/dapp.css" rel="stylesheet" type="text/css" rel="stylesheet">
</head>
<body>
<div class="container" style="width: 650px;">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="text-center">Election Results</h1>
            <hr/>
            <br/>
            <div id="loader">
                <p class="text-center">Loading...</p>
            </div>
            <div id="content">
                <div id="account"></div>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Votes</th>
                    </tr>
                    </thead>
                    <tbody id="candidatesResults">
                    </tbody>
                </table>
                <hr/>
                <p id="accountAddress" class="text-center"></p>
            </div>
        </div>
    </div>
</div>

<form id="ballot">
    <div class="form-group">
        <label for="candidatesSelect">Select Candidate</label>
        <select class="form-control" id="candidatesSelect">
        </select>
    </div>
    <button id="vote" type="submit" class="btn btn-primary">Vote</button>
    <hr />
</form>

<script src="/main.js"></script>
</body>
</html>