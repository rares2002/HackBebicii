import 'package:banking_app/utilities/theme.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/widgets/images.dart';
import 'package:banking_app/widgets/buttons.dart';
import 'package:banking_app/widgets/input_form.dart';
import 'package:banking_app/widgets/boxes.dart';
import 'dart:async';
import 'package:banking_app/models/user.dart';
import 'package:banking_app/utilities/server.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);
  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String email = "";
  String password = "";
  bool loading = false;
  bool success = false;
  
  void _processServerResponse(Map<String, dynamic> response) async {
    if (response["succes"]) {
      User.createUser(response["data"]["user"], response["data"]["token"]);
      setState(() {
        success = true;
      });

      Future.delayed(const Duration(seconds: 2), () {
        response["succes"]
            ? Navigator.popAndPushNamed(context, '/dashboard')
            : Navigator.popAndPushNamed(context, '/login');
        //response["data"]["user"]["role"] == "VOLUNTEER" ?
        //   Navigator.popAndPushNamed(context, '/volunteer') :
        //   Navigator.popAndPushNamed(context, '/home');
      });
    } else {
      setState(() {
        success = false;
      });
    }
    setState(() {
      loading = false;
    });
  }

  Future<void>  login() async {
    // TODO validation !!!
    FirebaseMessaging messaging = FirebaseMessaging.instance;
    
    String? FireBaseToken = await messaging.getToken(
      vapidKey: "BGXj_7PqQSaD4_IRZjNKWqOSJbMCRhVbwZO59A9iB74wg6uoYNFYtGsxZN7Kse7V8_Fl21omTMaeXDDIzvNH4PU",
    );
    setState(() {
      loading = true;
    });

    Future<Map<String, dynamic>> response = Server.apiCall('/auth/login',
        RequestType.POST, {"email": email, "password": password, "FireBaseToken": FireBaseToken}, null);

    response.then((value) => _processServerResponse(value));
  }

  @override
  Widget build(BuildContext context) {
    final node = FocusScope.of(context);
    return getScrollColumn([
      // idea: these might actually ecapsulate the underlying widget and be set
      // as percentages of screen height
      const SizedBox(
        height: 20,
      ),
      getLogo(context),
      const SizedBox(
        height: 20,
      ),
      Text('Welcome',
          style: getTheme().getTextStyle(40, 900, false, Colors.white)),
      const SizedBox(
        height: 50,
      ),
      createInputForm(
        node,
        false,
        'Email',
        'Enter your email',
        Icons.email,
        (value) => {email = value},
      ),
      const SizedBox(
        height: 20,
      ),
      createInputForm(
        node,
        true,
        'Password',
        'Enter your password',
        Icons.lock,
        (value) => {password = value},
      ),
      const SizedBox(
        height: 50,
      ),
      createAuthButton(
        context,
        'assets/google.png',
        'Login',
        login,
        true,
      ),
      const SizedBox(
        height: 50,
      ),
      createLinkBlockButton(
          context, '', "Dont't have an account yet? Register here"),
    ], context);
  }
}
