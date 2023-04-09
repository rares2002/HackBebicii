import 'package:banking_app/utilities/theme.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/utilities/server.dart';
import 'package:banking_app/widgets/images.dart';
import 'package:banking_app/widgets/buttons.dart';
import 'package:banking_app/widgets/input_form.dart';
import 'package:banking_app/widgets/boxes.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({Key? key}) : super(key: key);

  @override
  State<RegisterPage> createState() => RegisterPageState();
}

class RegisterPageState extends State<RegisterPage> {
  String email = "";
  String password = "";
  String name = "";
  String phone = "";
  String confirmPassword = "";
  bool loading = false;
  bool success = false;

  void register() {
    setState(() {
      loading = true;
    });
    void _processServerResponse(Map<String, dynamic> response) {
      setState(() {
        loading = false;
      });
      if (response["success"]) {
        setState(() {
          success = true;
        });

        Future.delayed(const Duration(seconds: 2), () {
          Navigator.popAndPushNamed(context, '/login');
        });
      } else {
        setState(() {
          success = false;
        });
      }
    }

    Future<Map<String, dynamic>> response = Server.apiCall(
        '/auth/register',
        RequestType.POST,
        {
          "name": name,
          "telephone": phone,
          "email": email,
          "password": password,
          "confPassword": confirmPassword,
        },
        null);
    response.then((value) => _processServerResponse(value));
  }

  @override
  Widget build(BuildContext context) {
    final node = FocusScope.of(context);
    return getScrollColumn([
      // idea: these might actually ecapsulate the underlying widget and be set
      // as percentages of screen height

      getLogo(context),

      Text('Create Account',
          style: getTheme().getTextStyle(40, 900, false, Colors.white)),
    
      createInputForm(
        node,
        false,
        'Full Name',
        'Enter your full name',
        Icons.person,
        (value) => {name = value},
      ),

      createInputForm(
        node,
        false,
        'Email',
        'Enter your email',
        Icons.email,
        (value) => {email = value},
      ),

      createInputForm(
        node,
        false,
        'Phone',
        'Enter your phone number',
        Icons.phone,
        (value) => {phone = value},
      ),

      createInputForm(
        node,
        true,
        'Password',
        'Enter your password',
        Icons.lock,
        (value) => {password = value},
      ),

      createInputForm(
        node,
        true,
        'Confirm Password',
        'Re-Enter your password',
        Icons.lock,
        (value) => {confirmPassword = value},
      ),
      const SizedBox(
        height: 10,
      ),

      createAuthButton(
        context,
        'assets/google.png',
        'Register',
        register,
        true,
      ),
    ], context);
  }
}
