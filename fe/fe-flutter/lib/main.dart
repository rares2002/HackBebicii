// @dart=2.9

import 'package:banking_app/root_app.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/pages/auth/login.dart';
import 'package:banking_app/pages/auth/register.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: '/register',
    routes: {
      '/signIn': (context) => const LoginPage(),
      '/register': (context) => const RegisterPage()
    },
  ));
}
