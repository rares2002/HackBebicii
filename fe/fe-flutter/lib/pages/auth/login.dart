import 'package:banking_app/utilities/theme.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/widgets/images.dart';
import 'package:banking_app/widgets/buttons.dart';
import 'package:banking_app/widgets/input_form.dart';
import 'package:banking_app/widgets/boxes.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  
  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String email = "";
  String password = "";
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
        () => {},
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
