import 'package:flutter/material.dart';

class TosScreen extends StatelessWidget {
  const TosScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _TosScreen();
  }
}

class _TosScreen extends StatelessWidget {
  const _TosScreen({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xffF09D99),
        titleSpacing: 0,
        title: Row(
          children: [
            // Logo de la aplicación
            Padding(
              padding: const EdgeInsets.only(
                left: 16.0,
              ),
              child: Image.asset(
                'assets/logojpg.png',
                width: 50,
                height: 50,
              ),
            ),
            const SizedBox(width: 10),
            // Título de la aplicación
            const Text(
              'Cuéntame +',
              style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.white),
            ),

            const Padding(padding: EdgeInsets.symmetric(horizontal: 20)),
            if (MediaQuery.of(context).size.width > 888)
              Row(
                children: [
                  TextButton(
                      onPressed: () {
                        Navigator.of(context).pushNamed('/faq');
                      },
                      child: const Text(
                        "Preguntas Frecuentes",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Color(0xff292929)),
                      )),
                  const SizedBox(
                    width: 20,
                  ),
                  TextButton(
                      onPressed: () {
                        Navigator.of(context).pushNamed('/tos');
                      },
                      child: const Text(
                        "Términos y Condiciones",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Color(0xff292929)),
                      )),
                  const SizedBox(
                    width: 20,
                  ),
                  TextButton(
                      onPressed: () {
                        Navigator.of(context).pushNamed('/privacy');
                      },
                      child: const Text(
                        "Políticas de Privacidad",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Color(0xff292929)),
                      )),
                ],
              ),
          ],
        ),
        actions: [
          // Botón de iniciar sesión solo en escritorio
          if (MediaQuery.of(context).size.width > 880)
            Padding(
              padding: const EdgeInsets.only(
                  right: 16.0, top: 10.0, bottom: 10.0, left: 20.0),
              child: TextButton(
                onPressed: () {
                  // Acción del botón
                  Navigator.of(context).pushNamed('/login');
                },
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all<Color>(
                      const Color(0xff292929)), // Color de fondo
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius:
                          BorderRadius.circular(200.0), // Radio de los bordes
                    ),
                  ),
                ),
                child: const Text(
                  'Iniciar Sesión',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
        ],
      ),
      endDrawer: MediaQuery.of(context).size.width < 940
          ? Drawer(
              backgroundColor: const Color(0xffF09D99),
              child: ListView(
                padding: EdgeInsets.zero,
                children: <Widget>[
                  DrawerHeader(
                    child: Container(
                      alignment: Alignment.centerLeft,
                      child: Column(
                        children: const [
                          Image(
                            image: AssetImage('assets/logojpg.png'),
                            height: 89,
                            alignment: Alignment.centerLeft,
                          ),
                          Text(
                            'Cuéntame +',
                            style: TextStyle(
                                color: Colors.white,
                                fontSize: 32,
                                fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                    ),
                  ),
                  ListTile(
                    leading: const Icon(Icons.home_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Menú Principal',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/');
                    },
                  ),
                  ListTile(
                    leading: const Icon(Icons.question_answer_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Preguntas Frecuentes',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/faq');
                    },
                  ),
                  ListTile(
                    tileColor: const Color.fromARGB(255, 219, 135, 131),
                    leading:
                        const Icon(Icons.article_rounded, color: Colors.white),
                    title: const Text(
                      'Términos y Condiciones',
                      style: TextStyle(color: Colors.white),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/tos');
                    },
                  ),
                  ListTile(
                    leading: const Icon(Icons.privacy_tip_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Políticas de Privacidad',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/privacy');
                    },
                  ),
                  const SizedBox(
                    height: 250,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 30),
                    child: TextButton(
                      onPressed: () {
                        // Acción del botón
                        Navigator.of(context).pushNamed('/login');
                      },
                      style: ButtonStyle(
                        backgroundColor: MaterialStateProperty.all<Color>(
                            const Color(0xff292929)), // Color de fondo
                        shape:
                            MaterialStateProperty.all<RoundedRectangleBorder>(
                          RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(
                                200.0), // Radio de los bordes
                          ),
                        ),
                      ),
                      child: const Text(
                        'Iniciar Sesión',
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
            )
          : null,
      body: SingleChildScrollView(
          child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40),
            child: Column(
              children: [
                const SizedBox(height: 20),
                const Text(
                  "Términos y Condiciones de Uso",
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                ),
                /* SizedBox(height: 20),
                Text(
                  "Última actualización: 1 de enero de 2022",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.left,
                ), */
                const SizedBox(height: 20),
                const Text(
                  "Última actualización: 11 de febrero de 2024.",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      "¡Te damos la bienvenida a Cuéntame +!",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                const Text(
                    "Las presentes Condiciones regulan: El uso de esta Aplicación, y Cualquier otro Contrato o relación jurídica conexos celebrados con el Titular de forma jurídicamente vinculante. Las palabras en mayúsculas se definen en la sección correspondiente específica del presente documento."),
                const SizedBox(height: 20),
                const Text(
                    "Los Usuarios deben leer atentamente el presente documento. Ninguna de las disposiciones de las presentes Condiciones crea una relación laboral, de agencia o de asociación entre las partes involucradas. Esta Aplicación es ofrecida por: MICHISOFT S DE RL DE CV UBICADA EN CALLE CIRCUITO DEL GATO 202, CIUDAD ADMINISTRATIVA, 98160 ZACATECAS, ZAC. Correo electrónico de contacto del Titular: contacto.michisoft@gmail.com"),
                const SizedBox(height: 20),
                const Text(
                  "Información sobre esta Aplicación",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                const Text(
                    "Cuéntame+ es tu mejor compañero para resolver tus dudas de educación financiera y contabilidad. En un mundo donde las decisiones financieras son cada vez más complejas y determinantes para el bienestar económico, Cuéntame+ ofrece una solución accesible y personalizada. «Esta Aplicación» hace referencia a: Esta página web, incluyendo sus subdominios y cualquier otra página web mediante la cual el Titular facilite su Servicio; Aplicaciones para móviles, tabletas y otros sistemas de dispositivos inteligentes; El Servicio; Lo que el usuario debería saber de un vistazo La utilización de esta Aplicación y del Servicio está restringida en función de la edad: para acceder a esta Aplicación y a sus Servicios y utilizarlos es preciso ser mayor de edad según la ley aplicable y estar inscrito y matriculado en alguna de las instituciones de educación que hemos seleccionado. El Servicio/esta Aplicación solo está destinado a los Consumidores. "),
              ],
            ),
          ),
          const SizedBox(height: 20),
          Container(
            height: 50.0,
            color: const Color(0xffF09D99),
          )
        ],
      )),
    );
  }
}
