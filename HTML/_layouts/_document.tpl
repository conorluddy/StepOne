<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- change this to your env , if your page is on root of webserver, and yo dont have any links that are located inside folders you can omit it -->
  <base href="{{url}}">

  <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
  <meta name="description" content="{{description}}">
  <meta name="keywords" content="{{keywords}}">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

  <title></title>



  <link rel="stylesheet" href="css/styles.css">
  
</head>
<body id="page-{{ pageId }}" role="document">

  <main role="main" class="main clearfix">
      
      {% block content %}{% endblock %}

  </main>

</body>
</html>
