// @dart=2.9
import 'package:provider/provider.dart';

import 'firebase_options.dart';
import 'package:banking_app/root_app.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/pages/auth/login.dart';
import 'package:banking_app/pages/auth/register.dart';
import 'package:banking_app/pages/dashboard_page.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:get_storage/get_storage.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:banking_app/pages/chatGPT/stores/AIChatStore.dart';
import 'package:banking_app/pages/chatGPT/AppOpenPage.dart';
import 'package:banking_app/pages/chatGPT/utils/Chatgpt.dart';
import 'package:banking_app/pages/chatGPT/components/HideKeyboard.dart';

void main() async {
  SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
    statusBarColor: Colors.black,
  ));
  await dotenv.load(fileName: ".env");
  await GetStorage.init();
  await ChatGPT.initChatGPT();
  runApp(
    ChangeNotifierProvider(
      create: (context) => AIChatStore(),
      child: MyApp(),
    ),
  );
  Firebase.initializeApp();
  configLoading();
}

class MyApp extends StatelessWidget {
  // const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return HideKeyboard(
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          scaffoldBackgroundColor: Colors.white,
          brightness: Brightness.light,
        ),
        initialRoute: '/login',
        routes: {
          '/login': (context) => const LoginPage(),
          '/register': (context) => const RegisterPage(),
          '/dashboard': (context) => const RootApp(),
        },
        builder: EasyLoading.init(),
      ),
    );
  }
}

Future<void> configLoading() async {
  EasyLoading.instance
    ..maskType = EasyLoadingMaskType.none
    ..loadingStyle = EasyLoadingStyle.dark
    ..indicatorSize = 45.0
    ..radius = 10.0
    ..displayDuration = const Duration(milliseconds: 1000)
    ..userInteractions = false;
}
