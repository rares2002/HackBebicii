import 'package:flutter/material.dart';

final Map<String, List<Color>> themeColors = {
  'firends': [MyColors.darkGreen],
  //add the colors fot the 2 themes here
  'relationShip': [MyColors.cherryRed, MyColors.lightRed],
};

class MyColors {
  static const Color cherryRed = Color(0xFFE4345D);
  static const Color lightRed = Color(0xFFDE5F83);
  static const Color darkGreen = Color(0xFF36624D);
  static const Color gray = Color(0xFF757575);
  static const Color lightGrey = Color(0xFF939590);
  //insert other obscure colors here
}

class MyFonts {
  static const String sansation = 'Sansation';
}

class MyTheme {
  getRelationShipTextColor() {
    return MyColors.cherryRed;
  }

  getFriendTextColor() {
    return MyColors.darkGreen;
  }

  getTextColor() {
    return Colors.white;
  }

  getPassionsColor() {
    return MyColors.lightGrey;
  }

  InputDecorationTheme getAuthInputDecoration() {
    return InputDecorationTheme(
      labelStyle: TextStyle(fontSize: 20, color: getTextColor()),
      enabledBorder: UnderlineInputBorder(
        borderSide: BorderSide(width: 3, color: getTextColor()),
      ),
      prefixIconColor: Colors.white,
    );
  }

  TextStyle getTextStyle(
      double fontSize, int fontWeight, bool isItalic, Color color) {
    FontWeight setFontWeight;
    switch (fontWeight) {
      case 200:
        setFontWeight = FontWeight.w200;
        break;
      case 300:
        setFontWeight = FontWeight.w300;
        break;
      case 400:
        setFontWeight = FontWeight.w400;
        break;
      default:
        setFontWeight = FontWeight.w400;
        break;
    }
    return TextStyle(
      color: color,
      fontSize: fontSize,
      fontFamily: MyFonts.sansation,
      fontWeight: setFontWeight,
      fontStyle: isItalic ? FontStyle.italic : FontStyle.normal,
    );
  }

  Decoration getAuthButtonDecoration() {
    return BoxDecoration(
      color: getTextColor(),
      borderRadius: const BorderRadius.all(Radius.circular(10.0)),
    );
  }
}

MyTheme getTheme() {
  return MyTheme();
}
