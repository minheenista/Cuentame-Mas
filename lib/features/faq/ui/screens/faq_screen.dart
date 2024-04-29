import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class FaqScreen extends StatelessWidget {
  const FaqScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _FaqScreen();
  }
}

class _FaqScreen extends StatelessWidget {
  const _FaqScreen({
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
              'Cuentame +',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
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
                        "Terminos y Condiciones",
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
                        "Politicas de Privacidad",
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
                            'Cuentame +',
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
                      'Menu Principal',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                    },
                  ),
                  ListTile(
                    tileColor: const Color.fromARGB(255, 219, 135, 131),
                    leading: const Icon(Icons.question_answer_rounded,
                        color: Colors.white),
                    title: const Text(
                      'Preguntas Frecuentes',
                      style: TextStyle(color: Colors.white),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/faq');
                    },
                  ),
                  ListTile(
                    leading: const Icon(Icons.article_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Términos y Condiciones',
                      style: TextStyle(color: Color(0xff292929)),
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
            const SizedBox(
              height: 20,
            ),
            const Text('Preguntas Frecuentes',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 48,
                )),
            const SizedBox(height: 20),
            Padding(
              padding: EdgeInsets.symmetric(
                  horizontal: MediaQuery.of(context).size.width > 1000
                      ? 180
                      : MediaQuery.of(context).size.width < 880
                          ? 80
                          : 120),
              child: TextField(
                  decoration: InputDecoration(
                hintText: 'Buscar',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
              )),
            ),
            const SizedBox(height: 20),
            /* Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                QuestionCard(),
                QuestionCard(),
                QuestionCard(),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                QuestionCard(),
                QuestionCard(),
                QuestionCard(),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                QuestionCard(),
                QuestionCard(),
                QuestionCard(),
              ],
            ), */

            if (MediaQuery.of(context).size.width > 1200)
              Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      QuestionCard(),
                      QuestionCard(),
                      QuestionCard(),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      QuestionCard(),
                      QuestionCard(),
                      QuestionCard(),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      QuestionCard(),
                      QuestionCard(),
                      QuestionCard(),
                    ],
                  ),
                ],
              )
            else if (MediaQuery.of(context).size.width > 830)
              Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      QuestionCard(),
                      QuestionCard(),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      QuestionCard(),
                      QuestionCard(),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      QuestionCard(),
                      QuestionCard(),
                    ],
                  ),
                ],
              )
            else
              Column(
                children: [
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      QuestionCard(),
                      QuestionCard(),
                      QuestionCard(),
                    ],
                  ),
                ],
              ),

            /* LayoutBuilder(
              builder: (context, constraints) {
                if (constraints.maxWidth > 880) {
                  // Vista de escritorio
                  return GridView.count(
                    crossAxisCount: 3,
                    shrinkWrap: true,
                    children: List.generate(9, (index) {
                      return QuestionCard();
                    }),
                  );
                } else if (constraints.maxWidth > 600) {
                  // Vista de tablet
                  return GridView.count(
                    crossAxisCount: 2,
                    shrinkWrap: true,
                    children: List.generate(6, (index) {
                      return QuestionCard();
                    }),
                  );
                } else {
                  // Vista de móvil
                  return Column(
                    children: List.generate(3, (index) {
                      return QuestionCard();
                    }),
                  );
                }
              },
            ), */
            const SizedBox(
              height: 20,
            ),
            Container(
              alignment: Alignment.centerLeft,
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 70),
                child: Text(
                  "Tienes mas dudas? Llena le siguiente formulario.",
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 70, right: 70, top: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  if (MediaQuery.of(context).size.width > 888)
                    Column(
                      children: [
                        Row(
                          children: [
                            Expanded(
                              child: TextField(
                                decoration: InputDecoration(
                                  hintText: 'Nombre',
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(20),
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(width: 20),
                            Expanded(
                              child: TextField(
                                decoration: InputDecoration(
                                  hintText: 'Correo',
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(20),
                                  ),
                                ),
                              ),
                            ),
                            SizedBox(
                                width: MediaQuery.of(context).size.width > 1000
                                    ? 280
                                    : MediaQuery.of(context).size.width < 880
                                        ? 100
                                        : 200),
                            ElevatedButton.icon(
                              onPressed: () {},
                              icon: const Icon(Icons.send, color: Colors.white),
                              style: ElevatedButton.styleFrom(
                                primary:
                                    const Color(0xffF09D99), // Color de fondo

                                padding: const EdgeInsets.symmetric(
                                    vertical: 16,
                                    horizontal:
                                        20), // Ajusta la altura del botón
                              ),
                              label: const Text(
                                'Enviar',
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                    fontSize: 18, // Tamaño del texto
                                    color: Colors.white // Color del texto
                                    ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        TextField(
                          keyboardType: TextInputType.multiline,
                          maxLines: null,
                          decoration: InputDecoration(
                            hintText: 'Mensaje',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                      ],
                    ),
                  if (MediaQuery.of(context).size.width < 889)
                    Column(
                      children: [
                        TextField(
                          decoration: InputDecoration(
                            hintText: 'Nombre',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                        const SizedBox(height: 20),
                        TextField(
                          decoration: InputDecoration(
                            hintText: 'Correo',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                        const SizedBox(height: 20),
                        TextField(
                          keyboardType: TextInputType.multiline,
                          maxLines: null,
                          decoration: InputDecoration(
                            hintText: 'Mensaje',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                        const SizedBox(height: 10),
                        Container(
                          alignment: Alignment.centerRight,
                          child: ElevatedButton.icon(
                            onPressed: () {},
                            icon: const Icon(Icons.send, color: Colors.white),
                            style: ElevatedButton.styleFrom(
                              primary:
                                  const Color(0xffF09D99), // Color de fondo

                              padding: const EdgeInsets.symmetric(
                                  vertical: 16,
                                  horizontal: 20), // Ajusta la altura del botón
                            ),
                            label: const Text(
                              'Enviar',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                  fontSize: 18, // Tamaño del texto
                                  color: Colors.white // Color del texto
                                  ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  const SizedBox(height: 50.0),
                ],
              ),
            ),
            Container(
              height: 50.0,
              color: const Color(0xffF09D99),
            )
          ],
        ),
      ),
    );
  }
}

class QuestionCard extends StatelessWidget {
  const QuestionCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              titlePadding: const EdgeInsets.fromLTRB(16, 16, 16, 0),
              title: Row(
                children: [
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 50),
                    child: Text(
                      'Pregunta  jasgdjagsjd',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                          color: Color(0xffF09D99)),
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close),
                    color: const Color(0xffF09D99),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  )
                ],
              ),
              content: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 50),
                child: Text(
                  'Contenido de la pregunta...',
                  style: TextStyle(fontSize: 16),
                ),
              ),
            );
          },
        );
      },
      child: SizedBox(
        height: 150,
        width: 400,
        child: Card(
          margin: const EdgeInsets.all(10),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Expanded(
                  child: Text(
                    'Pregunta ${DateTime.now().millisecond}',
                    style: const TextStyle(fontSize: 16),
                  ),
                ),
                const Icon(Icons.arrow_forward),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
