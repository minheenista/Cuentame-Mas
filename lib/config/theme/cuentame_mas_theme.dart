import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

// importar tema claro
//importar tema oscuro

ThemeData cmThemeData(/* CMColors colors, */ Brightness brightness) =>
    ThemeData(
/*   colorScheme: colors.colorScheme, 
 */
        brightness: brightness,
        textTheme: GoogleFonts.poppinsTextTheme(
          const TextTheme(
            headline1: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 96, letterSpacing: -1.5),
            headline2: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 60, letterSpacing: -0.5),
            headline3: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 48, letterSpacing: 0),
            headline4: TextStyle(
                fontWeight: FontWeight.w700, fontSize: 34, letterSpacing: 0),
            headline5: TextStyle(
                fontWeight: FontWeight.w800, fontSize: 20, letterSpacing: 0.18),
            headline6: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 20, letterSpacing: 0.15),
            subtitle1: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 16, letterSpacing: 0.15),
            subtitle2: TextStyle(
                fontWeight: FontWeight.w600, fontSize: 14, letterSpacing: 0.1),
            caption: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 12, letterSpacing: 0.4),
            overline: TextStyle(
                fontWeight: FontWeight.w600, fontSize: 10, letterSpacing: 0.5),
            bodyText1: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 16, letterSpacing: 0.1),
            bodyText2: TextStyle(
                fontWeight: FontWeight.w400, fontSize: 14, letterSpacing: 0.15),
          ),
        ),
        fontFamily: 'Poppins-Regular',
        inputDecorationTheme: InputDecorationTheme(
          errorMaxLines: 3,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16),
            borderSide: const BorderSide(
              color: Color(0xffF09D99),
              width: 2,
            ),
          ),
          errorStyle: const TextStyle(
              color: Color.fromARGB(255, 207, 25, 16)), //PONER COLOR DE ERROR
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
                shape: const StadiumBorder(),
                textStyle: const TextStyle(
                    fontWeight: FontWeight.w800, letterSpacing: 1))),
        textButtonTheme: TextButtonThemeData(
            style: TextButton.styleFrom(
          textStyle:
              const TextStyle(fontWeight: FontWeight.w800, letterSpacing: 1),
          shape: const StadiumBorder(),
        )),
        outlinedButtonTheme: OutlinedButtonThemeData(
            style: OutlinedButton.styleFrom(
                shape: const StadiumBorder(),
                textStyle: const TextStyle(
                    fontWeight: FontWeight.w800, letterSpacing: 1))),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xffF09D99),
        ),
        cardColor: Colors.white,
        cardTheme: CardTheme(
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16))),
        snackBarTheme: SnackBarThemeData(
            behavior: SnackBarBehavior.floating,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16))));

bool isDarkMode(BuildContext context) {
  return Theme.of(context).brightness == Brightness.dark;
}
/* CMColors getCurrentColors(BuildContext context) {
  return isDarkMode(context) ? CMColors.dark : CMColors.light;
}

GMARColors getCurrentColors(BuildContext context) =>
    isDarkMode(context) ? getIt<GMARDarkTheme>() : getIt<GMARLightTheme>();
 */