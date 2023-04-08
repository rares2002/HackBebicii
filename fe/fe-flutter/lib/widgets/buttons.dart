import 'package:flutter/material.dart';
import 'package:banking_app/utilities/theme.dart';
import 'package:banking_app/widgets/boxes.dart';

Widget createAuthButton(context, String path, String caption, Function() action,
    bool isRelationShip,
    {bool isPreDashboard = false}) {
  return TextButton(
      onPressed: action,
      style: TextButton.styleFrom(padding: EdgeInsets.zero),
      child: getAuthButtonBox(
          150,
          50,
          context,
          Text(
            caption,
            style: getTheme().getTextStyle(
                20,
                500,
                true,
                isRelationShip
                    ? getTheme().getRelationShipTextColor()
                    : getTheme().getFriendTextColor()),
            textAlign: TextAlign.center,
          )));
}

Widget createLinkBlockButton(context, String path, String caption) {
  return TextButton(
    onPressed: () {},
    style: TextButton.styleFrom(padding: EdgeInsets.zero),
    child: Text(
      caption,
      style: getTheme().getTextStyle(20, 400, true, getTheme().getTextColor()),
      textAlign: TextAlign.center,
    ),
  );
}
