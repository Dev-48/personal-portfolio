export const contactFromUserTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        /* Reset CSS for email compatibility */
        body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-color: #4f46e5;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            background-color: #f9fafb;
            padding: 30px;
        }
        .field-label {
            font-weight: bold;
            color: #374151;
            padding-right: 10px;
        }
        .field-value {
            color: #6b7280;
            padding-bottom: 15px;
        }
        .message-box {
            background-color: #ffffff;
            border-left: 4px solid #4f46e5;
            padding: 15px;
            margin-top: 10px;
        }
        .footer {
            background-color: #f3f4f6;
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
        @media only screen and (max-width: 480px) {
            .container {
                width: 100% !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333;">
    <center>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td align="center">
                    <table border="0" cellpadding="0" cellspacing="0" width="600" class="container">
                        <!-- Header -->
                        <tr>
                            <td class="header">
                                <h1>New Contact Form Submission</h1>
                            </td>
                        </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td class="content">
                                <p>Hello,</p>
                                <p>You've received a new message from your portfolio website's contact form. Here are the details:</p>
                                
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="20%" class="field-label">Name:</td>
                                        <td width="80%" class="field-value">{username}</td>
                                    </tr>
                                    <tr>
                                        <td class="field-label">Email:</td>
                                        <td class="field-value">{userEmail}</td>
                                    </tr>
                                    <tr>
                                        <td class="field-label">Subject:</td>
                                        <td class="field-value">{userSubject}</td>
                                    </tr>
                                    <tr>
                                        <td class="field-label" valign="top">Message:</td>
                                        <td class="field-value">
                                            <div class="message-box">
                                               {userMessage}
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                                <p>You can reply directly to this email to respond to the sender.</p>
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td class="footer">
                                <p>This email was sent from the contact form on Sumit's portfolio website.</p>
                                <p>&copy; 2025 Sumit's Portfolio. All rights reserved.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>`