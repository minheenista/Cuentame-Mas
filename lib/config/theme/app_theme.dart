import 'package:flutter/material.dart';
// import 'package:google_fonts/google_fonts.dart';
//import 'dart:typed_data';

class AppTheme {
  ThemeData getTheme() {
    const primaryVariant = Color(0xffF09D99);
    /* const primary = Color(0xffFCBCB8);
    const secondary = Color(0xffA8DFEF);
    const secondaryVariant = Color(0xff7EC9E0);
    const background = Color(0xffEDF0F3);
    const onBackground = Color(0xff292929); */

    return ThemeData(
      useMaterial3: true,
      colorSchemeSeed: primaryVariant,
      /* textTheme: GoogleFonts.poppinsTextTheme(),
      fontFamily: 'Poppins-Regular', */
      /* colorScheme: ColorScheme(
        primary: primary,
        primaryVariant: primaryVariant,
        secondary: secondary,
        secondaryVariant: secondaryVariant,
        surface: background,
        background: background,
        error: Colors.red,
        onPrimary: onBackground,
        onSecondary: onBackground,
        onSurface: onBackground,
        onBackground: onBackground,
        onError: Colors.white,
        brightness: Brightness.light,
      ), */
      listTileTheme: const ListTileThemeData(iconColor: primaryVariant),
    );
  }
}
