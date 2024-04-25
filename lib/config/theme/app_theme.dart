import 'package:flutter/material.dart';

class AppTheme {
  ThemeData getTheme() {
    const primaryVariant = Color(0xffF09D99);
    const primary = Color(0xffFCBCB8);
    const secondary = Color(0xffA8DFEF);
    const secondaryVariant = Color(0xff7EC9E0);
    const background = Color(0xffEDF0F3);
    const onBackground = Color(0xff292929);

    return ThemeData(
      useMaterial3: true,
      colorSchemeSeed: primaryVariant,
      listTileTheme: const ListTileThemeData(iconColor: primaryVariant),
    );
  }
}
