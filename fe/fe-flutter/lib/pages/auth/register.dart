
import 'package:banking_app/utilities/theme.dart';
import 'package:flutter/material.dart';
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
      Text('Create Account',
          style: getTheme().getTextStyle(40, 900, false, Colors.white)),
      const SizedBox(
        height: 50,
      ),
      createInputForm(
        node,
        false,
        'Full Name',
        'Enter your full name',
        Icons.person,
        (value) => {name = value},
      ),
      const SizedBox(
        height: 20,
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
        false,
        'Phone',
        'Enter your phone number',
        Icons.phone,
        (value) => {phone = value},
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
      createInputForm(
        node,
        true,
        'Confirm Password',
        'Re-Enter your password',
        Icons.lock,
        (value) => {confirmPassword = value},
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
