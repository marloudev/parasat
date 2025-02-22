<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PARASAT Application Status</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            max-width: 900px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
        }

        .content {
            padding: 20px;
            line-height: 1.6;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="content">
            <p>Dear {{$data['fname']}} {{$data['lname']}},</p>

            <p>Thank you for your interest in applying for an internet plan with PARASAT. After careful review, we regret to inform you that your application for the <strong>{{$data['plan_name']}}</strong> has been <strong>declined</strong>.</p>

            <p>We understand that this may be disappointing, and we encourage you to explore other available options that may better suit your needs. Should you wish to reapply or have any questions about our available plans, please do not hesitate to reach out to us.</p>

            <p>If you have any further inquiries or would like assistance in selecting a suitable plan, our customer support team is available at:</p>
            <ul>
                <li>0915-870-1972</li>
                <li>(034) 312-6184</li>
            </ul>

            <p>We appreciate your understanding and hope to serve you in the future.</p>

            <p>Warm regards,</p>
            <p><strong>PARASAT Fiber</strong></p>

            <a href="https://apply-parasat.site" class="button">Visit Us</a>
        </div>

        <div class="footer">
            <p>&copy; 2025 PARASAT Fiber | All rights reserved.</p>
        </div>
    </div>

</body>

</html>