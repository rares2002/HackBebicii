// @dart=2.9

import 'package:banking_app/root_app.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/pages/auth/login.dart';
import 'package:banking_app/pages/auth/register.dart';
import 'package:banking_app/pages/dashboard_page.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: '/login',
    routes: {
      '/login': (context) => const LoginPage(),
      '/register': (context) => const RegisterPage(),
      '/dashboard': (context) => const DashboardPage(),
    },
  ));
}
