import 'package:flutter/material.dart';
import 'package:banking_app/utilities/theme.dart';

Widget createInputForm(node, bool doObscure, String label, String hint,
    IconData icon, Function(dynamic value) cb) {
  return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: 25,
      ),
      child: Container(
          decoration: BoxDecoration(
            border: Border(
              bottom: BorderSide(color: getTheme().getTextColor(), width: 3),
            ),
          ),
          child: TextField(
            style: getTheme().getTextStyle(20, 300, false, Colors.white),
            cursorColor: getTheme().getTextColor(),
            onChanged: (value) {
              // this is how you can pass back the inserted value
              cb(value);
            },
            obscureText: doObscure,
            obscuringCharacter: '*',
            decoration: InputDecoration(
                focusColor: getTheme().getTextColor(),
                prefixIconColor: getTheme().getTextColor(),
                prefixIcon: Icon(
                  icon,
                  color: getTheme().getTextColor(),
                ),
                labelText: label,
                labelStyle: getTheme()
                    .getTextStyle(20, 300, false, getTheme().getTextColor()),
                hintText: hint,
                hintStyle: getTheme()
                    .getTextStyle(20, 300, false, getTheme().getTextColor()),
                border: InputBorder.none),
            onEditingComplete: () => node.nextFocus(),
          )));
}
