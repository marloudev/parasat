<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Approved Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .title {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            margin-bottom: 10px;
        }

        .content {
            font-size: 16px;
            color: #555555;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .content strong {
            font-weight: bold;
        }

        .details-table {
            width: 100%;
            margin-top: 20px;
            border-collapse: collapse;
        }

        .details-table td {
            padding: 10px;
            border: 1px solid #e0e0e0;
        }

        .details-table th {
            text-align: left;
            padding: 10px;
            background-color: #f8f8f8;
            border: 1px solid #e0e0e0;
        }

        .footer {
            font-size: 14px;
            text-align: center;
            color: #888888;
            margin-top: 30px;
        }

        .contact-info {
            font-size: 16px;
            color: #333333;
            margin-top: 10px;
        }

        .button {
            background-color: #007bff;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 4px;
            text-decoration: none;
            text-align: center;
            display: inline-block;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="content">
            <p>Dear {{$data['fname']}} {{$data['lname']}},</p>

            <p>We are pleased to inform you that your application for the <strong>{{$data['plan_name']}}</strong> has been successfully approved. We are excited to welcome you as a customer and look forward to providing you with a reliable and high-speed internet experience.</p>

            <p>Here are the details of your approved internet plan:</p>

            <table class="details-table">
                <tr>
                    <th>Plan Name</th>
                    <td>{{$data['plan_name']}}</td>
                </tr>
                <tr>
                    <th>Speed</th>
                    <td>{{$data['plan_speed']}}</td>
                </tr>
                <tr>
                    <th>Monthly Fee</th>
                    <td>{{$data['plan_price']}}</td>
                </tr>
            </table>
            <p></p>
            <p>Kindly visit our office at Unit 5, Plaza Building, Rizal Street, San Carlos City, Negros Occidental for billing purposes. Please note that the installation process typically requires 3 to 7 days for completion. We appreciate your understanding and cooperation. If you have any questions or need further assistance, feel free to contact us at <strong>0915-870-1972</strong> / <strong>(034)312-6184</strong>.</p>

            <p>Thank you for choosing <strong>PARASAT Parafiber</strong>. We are committed to providing you with the best service and support.</p>

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