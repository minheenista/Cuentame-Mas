import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';

@injectable
class PrimaryColors implements ColorShade {
  @override
  Color s50 = const Color(0xFFE4F3FF);

  @override
  Color s100 = const Color(0xFFE4F3FF);

  @override
  Color s200 = const Color(0xFF94CDFF);

  @override
  Color s300 = const Color(0xFF68B9FF);

  @override
  Color s400 = const Color(0xFF4AA8FF);

  @override
  Color s500 = const Color(0xFF3899FF);

  @override
  Color s600 = const Color(0xFF3C8AFF);

  @override
  Color s700 = const Color(0xFF3D76F2);

  @override
  Color s800 = const Color(0xFF3D64DF);

  @override
  Color s900 = const Color(0xFF3C42BF);
}

@injectable
class SecondaryColors implements ColorShade {
  @override
  Color s50 = const Color(0xFFEfE5FB);

  @override
  Color s100 = const Color(0xFFD5C0F5);

  @override
  Color s200 = const Color(0xFFB895EF);

  @override
  Color s300 = const Color(0xFF9B68EA);

  @override
  Color s400 = const Color(0xFF8244E5);

  @override
  Color s500 = const Color(0xFF6815DF);

  @override
  Color s600 = const Color(0xFF5C0FD9);

  @override
  Color s700 = const Color(0xFF4B00D1);

  @override
  Color s800 = const Color(0xFF3700CB);

  @override
  Color s900 = const Color(0xFF0000C4);
}

abstract class ColorShade {
  abstract Color s50;
  abstract Color s100;
  abstract Color s200;
  abstract Color s300;
  abstract Color s400;
  abstract Color s500;
  abstract Color s600;
  abstract Color s700;
  abstract Color s800;
  abstract Color s900;
}

abstract class CMColors {
  abstract Color primaryColor;
  abstract Color onPrimaryColor;

  abstract Color secundaryColor;
  abstract Color onSecundaryColor;

  abstract Color primaryText;
  abstract Color secundaryText;

  abstract Color success;
  abstract Color info;
  abstract Color warning;
  abstract Color danger;

  abstract Color background;
  abstract Color onBackground;

  abstract Color surface;
  abstract Color onSurface;

  abstract Color error;
  abstract Color onError;

  abstract Color hintText;
  abstract Brightness brightness;

  abstract ColorScheme colorScheme;

  abstract Color toolbar;
  abstract Color onToolbar;

  abstract Color iconMessageColor;
}
