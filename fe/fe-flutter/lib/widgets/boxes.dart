import 'package:banking_app/utilities/theme.dart';
import 'package:flutter/material.dart';
import 'package:banking_app/widgets/images.dart';

Widget getImageBox(
    double? width, double? height, context, Widget child, bool hasBorder,
    {AlignmentGeometry align = Alignment.center}) {
  return Container(
      //modify to fit the image on the whole screen
      height: height,
      width: width,
      alignment: align,
      decoration: BoxDecoration(
        border: hasBorder
            ? const Border(
                top: BorderSide(width: 1.0, color: Colors.white),
                left: BorderSide(width: 1.0, color: Colors.white),
                right: BorderSide(width: 1.0, color: Colors.white),
                bottom: BorderSide(width: 1.0, color: Colors.white),
              )
            : null,
      ),
      child: child);
}

Widget getAuthButtonBox(double? width, double? height, context, Widget child,
    {AlignmentGeometry align = Alignment.center}) {
  return Container(
      height: height,
      width: width,
      alignment: align,
      decoration: getTheme().getAuthButtonDecoration(),
      child: child);
}

Widget getScrollColumn(List<Widget> components, dynamic context) {
  return Container(
      decoration: BoxDecoration(image: getBackGroundImage(context)),
      // decoration: BoxDecoration(color: Colors.red.shade400),
      child: SafeArea(
          left: false,
          right: false,
          child: Scaffold(
            backgroundColor: Colors.transparent,
            body: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: components),
              ),
            ),
          )));
}
