import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';
import 'cm_colors.dart';

/* final primaryColors = getIt<PrimaryColors>();
final secondaryColors = getIt<SecondaryColors>(); */

@injectable
class CMLightTheme implements CMColors {
  @override
  Color background = const Color(0xffEDF0F3);

  @override
  Brightness brightness = Brightness.light;

  @override
  late ColorScheme colorScheme;

  CMLightTheme() {
    colorScheme = ColorScheme(
      primary: primaryColor,
      primaryVariant: primaryColor,
      secondary: secundaryColor,
      secondaryVariant: secundaryColor,
      surface: surface,
      background: background,
      error: error,
      onPrimary: onPrimaryColor,
      onSecondary: onSecundaryColor,
      onSurface: onSurface,
      onBackground: onBackground,
      onError: onError,
      brightness: brightness,
    );
  }

  @override
  Color danger = const Color(0xFFE75252);

  @override
  Color error = const Color(0xFFE75252);

  @override
  Color hintText = const Color(0xFF959595);

  @override
  Color iconMessageColor = const Color(0xFF7EC9E0);

  @override
  Color info = const Color(0xFF7EC9E0);

  @override
  Color onBackground = const Color(0xFF292929);

  @override
  Color onError = Colors.white;

  @override
  Color onPrimaryColor = Colors.white;

  @override
  Color onSecundaryColor = Colors.white;

  @override
  Color onSurface = const Color(0xFF292929);

  @override
  Color onToolbar = Colors.white;

  @override
  Color primaryColor = const Color(0xFFFCBCB8);

  @override
  Color primaryText = const Color(0xFF292929);

  @override
  Color secundaryColor = const Color(0xFFA8DFEF);

  @override
  Color secundaryText = const Color(0xff575757);

  @override
  Color success = const Color(0xffA7E8BD);

  @override
  Color surface = Colors.white;

  @override
  Color toolbar = const Color(0xffF09D99);

  @override
  Color warning = const Color(0xffFFD972);
}
