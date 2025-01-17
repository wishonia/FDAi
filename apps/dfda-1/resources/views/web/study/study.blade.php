<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    @include('meta')
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Droid+Sans);
        /* Take care of image borders and formatting */
        img {
            max-width: 600px;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        a {
            text-decoration: none;
            border: 0;
            outline: none;
            color: #ffffff;
        }
        a img {
            border: none;
        }
        /* General styling */
        td, h1, h2, h3  {
            font-family: Helvetica, Arial, sans-serif;
            font-weight: 400;
        }
        td {
            text-align: center;
        }
        body {
            -webkit-font-smoothing:antialiased;
            -webkit-text-size-adjust:none;
            width: 100%;
            height: 100%;
            color: #37302d;
            background: #ffffff;
            font-size: 16px;
        }
        table {
            border-collapse: collapse !important;
        }
        .headline {
            color: #ffffff;
            font-size: 24px;
        }
        .force-full-width {
            width: 100% !important;
        }
        .force-width-80 {
            width: 80% !important;
        }
        .pusher {
            width: 55px;
        }
        .steps {
            width: 43px;
        }
    </style>
    <style type="text/css" media="screen">
        @media screen {
            /*Thanks Outlook 2013! http://goo.gl/XLxpyl*/
            td, h1, h2, h3 {
                font-family: 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
            }
        }
    </style>
    <style type="text/css" media="only screen and (max-width: 480px)">
        /* Mobile styles */
        @media only screen and (max-width: 480px) {
            table[class="w320"] {
                width: 320px !important;
            }
            td[class="mobile-block"] {
                width: 100% !important;
                display: block !important;
            }
            td[class="pusher"] {
                width: 0 !important;
            }
            img[class="steps"] {
                width: 28px !important;
            }
        }
    </style>
    @include('loggers-js')
</head>
<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
<table align="center" cellpadding="0" cellspacing="0" class="force-full-width" height="100%" >
    <tr>
        <td align="center" valign="top" bgcolor="#ffffff"  width="100%">
            <center>
                <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="600" class="w320">
                    <tr>
                        <td align="center" valign="top">
                            <table cellpadding="0" cellspacing="0" class="force-full-width" style="margin:0 auto;">
                                <tr>
                                    @if($correlation)
                                        <td style="font-size: 40px; text-align:center;">
                                            {{$correlation->getPredictorExplanation()}}
                                        </td>
                                    @else
                                        <td style="font-size: 40px; text-align:center;">
                                            {{$meta['title']}}
                                        </td>
                                    @endif
                                </tr>
                                <br>
                            </table>
                            <br>
                            <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#4dbfbf">
                                @if($correlation)
                                    @include('web.study.study-header')
                                    <tr>
                                        <td style="color:#bbbbbb; font-size:12px;">
                                            <br>
                                            <a href="{{$correlation->getStudyLinkFacebook()}}">Share to
                                                Facebook</a> |
                                            <a href="{{$correlation->getStudyLinkTwitter()}}">Tweet</a> |
                                            <a href="{{$correlation->getStudyLinkGoogle()}}"
                                               target="_blank">Share on G+</a>
                                            <br><br><br>
                                        </td>
                                    </tr>
                                    @if($userId)
                                        <tr>
                                            <td style="color:#bbbbbb; font-size:30px;">
                                                <br>
                                                <a href="{{$correlation->getStudyLinkDynamic()}}"
                                                   target="_blank">Go to Full Study</a>
                                                <br><br><br>
                                            </td>
                                        </tr>
                                    @else
                                        @if(isset($studyHtml))
                                            {!! $studyHtml !!}
                                        @endif
                                        @if(isset($studySections))
                                            @foreach($studySections as $studySection)
                                                @include('web.study.study-section')
                                            @endforeach
                                        @endif
                                    @endif
                                @endif
                                <br>
                                @if(!$correlation)
                                        <tr>
                                            <td>
                                                <center>
                                                    <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="80%">
                                                        <tr>
                                                            <td style="color:#187272;">
                                                                <br>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </td>
                                        </tr>
                                    @foreach($studySections as $studySection)
                                        @include('web.study.study-section')
                                    @endforeach
                                        <tr>
                                            <td>
                                                <img src="https://www.filepicker.io/api/file/Fw5bWPbwRkG3N9o2zwB0" width="253" height="181" alt="robot picture">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
                                                    <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="80%">
                                                        <tr>
                                                            <td style="color:#187272;">
                                                                <br>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </td>
                                        </tr>
                                @endif
{{--                                @include('email.block-blue-button')--}}
                            </table>
{{--                            @include('email.block-orange')
                            @include('email.block-brown')--}}
                        </td>
                    </tr>
                </table>
            </center>
        </td>
    </tr>
</table>
@include('download-buttons')
</body>
</html>