import 'package:flutter/material.dart';
import 'package:banking_app/widgets/boxes.dart';

DecorationImage getBackGroundImage(context) {
  return const DecorationImage(
      fit: BoxFit.cover, image: AssetImage("assets/images/login-background.png"));
}

Widget getLogo(context) {
  return getImageBox(
      MediaQuery.of(context).size.width,
      MediaQuery.of(context).size.height / 3,
      context,
      Image.asset(
        "assets/images/Logo-transparent.png",
        fit: BoxFit.fill,
      ),
      false);
}
