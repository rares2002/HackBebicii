// @dart=2.9
import 'firebase_options.dart';
import 'package:banking_app/root_app.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/pages/auth/login.dart';
import 'package:banking_app/pages/auth/register.dart';
import 'package:banking_app/pages/dashboard_page.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:firebase_core/firebase_core.dart';
void main() async{
  WidgetsFlutterBinding.ensureInitialized();
   await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
FirebaseMessaging.instance.onTokenRefresh
    .listen((fcmToken) async {
      // final fcmToken = await FirebaseMessaging.instance.getToken();
      // TODO: If necessary send token to application server.

      // Note: This callback is fired at each app startup and whenever a new
      // token is generated.
    })
    .onError((err) {
      // Error getting token.
    });
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: '/login',
    routes: {
      '/login': (context) => const LoginPage(),
      '/register': (context) => const RegisterPage(),
      '/dashboard': (context) => const RootApp(),
    },
  ));
}
