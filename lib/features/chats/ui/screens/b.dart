import 'package:flutter/material.dart';

class ChatsScreens extends StatefulWidget {
  const ChatsScreens({super.key});

  @override
  _ChatsScreensState createState() => _ChatsScreensState();
}

class _ChatsScreensState extends State<ChatsScreens> {
  final TextEditingController _controller = TextEditingController();
  List<String> _messages = [];
  bool _showQuestions = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MediaQuery.of(context).size.width < 800
          ? AppBar(
              title: Row(children: [
                Image.asset('assets/logojpg.png', width: 50, height: 50),
                const SizedBox(width: 20),
                const Text(
                  "Cuéntame + ",
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ]),
              backgroundColor: const Color(0xFFFCBCB8),
              leading: Builder(
                builder: (BuildContext context) {
                  return IconButton(
                    icon: const Icon(Icons.menu),
                    onPressed: () {
                      Scaffold.of(context).openDrawer();
                    },
                  );
                },
              ),
            )
          : null,
      drawer: Drawer(
        backgroundColor: const Color(0xFFFCBCB8),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(
                  height: 20,
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Row(
                    children: [
                      Image.asset('assets/logojpg.png', width: 50, height: 50),
                      const SizedBox(width: 20),
                      const Text(
                        "Cuéntame + ",
                        style: TextStyle(
                          fontSize: 32,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
                const Divider(color: Color.fromARGB(120, 179, 179, 179)),
                TextButton.icon(
                  style: const ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  onPressed: () {},
                  icon: const Icon(
                    Icons.add_rounded,
                    color: Colors.black,
                  ),
                  label: const Text(
                    "Nueva conversación",
                    style: TextStyle(
                      color: Colors.black,
                    ),
                  ),
                ),
                const Divider(color: Color.fromARGB(120, 179, 179, 179)),
                const Text(
                  "Conversaciones",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                ),
                ListTile(
                  title: const Text('¿Qué es el rfc?'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
                ListTile(
                  title: const Text('¿Qué es situación fiscal?'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
                ListTile(
                  title: const Text('¿Cómo funciona el crédito?'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
                ListTile(
                  title: const Text('¿Para qué sirve la firma electronica'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
              ],
            ),
            ListTile(
              trailing: Icon(Icons.settings_rounded, color: Colors.black),
              title: Text("Nombre de usuario"),
              leading: Image.asset("assets/avatar.png", width: 40, height: 40),
            ),
          ],
        ),
      ),
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          if (constraints.maxWidth > 800) {
            return Row(
              children: [
                Padding(
                  padding: const EdgeInsets.only(
                      left: 16.0, top: 16.0, bottom: 16.0),
                  child: Container(
                    width: 300,
                    color: const Color(0xFFFCBCB8),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 10),
                                child: Row(
                                  children: [
                                    Image.asset('assets/logojpg.png',
                                        width: 50, height: 50),
                                    const SizedBox(width: 20),
                                    const Text(
                                      "Cuéntame + ",
                                      style: TextStyle(
                                        fontSize: 32,
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const Divider(
                                  color: Color.fromARGB(120, 179, 179, 179)),
                              TextButton.icon(
                                style: const ButtonStyle(
                                  alignment: Alignment.centerLeft,
                                ),
                                onPressed: () {},
                                icon: const Icon(
                                  Icons.add_rounded,
                                  color: Colors.black,
                                ),
                                label: const Text(
                                  "Nueva conversación",
                                  style: TextStyle(
                                    color: Colors.black,
                                  ),
                                ),
                              ),
                              const Divider(
                                  color: Color.fromARGB(120, 179, 179, 179)),
                              const Text(
                                "Conversaciones",
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 16),
                              ),
                              ListTile(
                                title: const Text('¿Qué es el rfc?'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                              ListTile(
                                title: const Text('¿Qué es situación fiscal?'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                              ListTile(
                                title: const Text('¿Cómo funciona el crédito?'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                              ListTile(
                                title: const Text(
                                    '¿Para qué sirve la firma electronica'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                            ],
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: ListTile(
                            trailing: Icon(Icons.settings_rounded,
                                color: Colors.black),
                            title: Text("Nombre de usuario"),
                            leading: Image.asset("assets/avatar.png",
                                width: 40, height: 40),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      children: [
                        Expanded(
                          child: _showQuestions
                              ? Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    _buildQuestionButton(
                                        '¿Qué es el RFC?', context),
                                    _buildQuestionButton(
                                        '¿Cómo se tramita el RFC?', context),
                                    _buildQuestionButton(
                                        '¿Qué documentos necesito para tramitar el RFC?',
                                        context),
                                    _buildQuestionButton(
                                        '¿Para qué sirve el RFC?', context),
                                  ],
                                )
                              : ListView.builder(
                                  itemCount: _messages.length,
                                  itemBuilder: (context, index) {
                                    return Container(
                                      margin: new EdgeInsets.symmetric(
                                          horizontal: 20.0, vertical: 10),
                                      padding: new EdgeInsets.symmetric(
                                          horizontal: 10, vertical: 5),
                                      decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(10),
                                          color: Color(0xFFA8DFEF),
                                          border: Border.all(
                                              color: Color(0xff7EC9E0))),
                                      child: ListTile(
                                        title: Text(
                                          _messages[index],
                                          textAlign: TextAlign.end,
                                        ),
                                        trailing:
                                            Image.asset("assets/avatar.png"),
                                      ),
                                    );
                                  },
                                ),
                        ),
                        Row(
                          children: [
                            Expanded(
                              child: TextField(
                                controller: _controller,
                                decoration: const InputDecoration(
                                  hintText: 'Type your message here...',
                                ),
                                onChanged: (value) {
                                  setState(() {
                                    _showQuestions = value.isEmpty;
                                  });
                                },
                              ),
                            ),
                            IconButton(
                              icon: const Icon(Icons.send),
                              onPressed: () {
                                setState(() {
                                  _messages.add(_controller.text);
                                  _controller.clear();
                                });
                              },
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            );
          } else {
            return Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Expanded(
                    child: _showQuestions
                        ? Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              _buildQuestionButton('¿Qué es el RFC?', context),
                              _buildQuestionButton(
                                  '¿Cómo se tramita el RFC?', context),
                              _buildQuestionButton(
                                  '¿Qué documentos necesito para tramitar el RFC?',
                                  context),
                              _buildQuestionButton(
                                  '¿Para qué sirve el RFC?', context),
                            ],
                          )
                        : ListView.builder(
                            itemCount: _messages.length,
                            itemBuilder: (context, index) {
                              return Container(
                                margin: new EdgeInsets.symmetric(
                                    horizontal: 20.0, vertical: 10),
                                padding: new EdgeInsets.symmetric(
                                    horizontal: 10, vertical: 5),
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    color: Color(0xFFA8DFEF),
                                    border:
                                        Border.all(color: Color(0xff7EC9E0))),
                                child: ListTile(
                                  title: Text(
                                    _messages[index],
                                    textAlign: TextAlign.end,
                                  ),
                                  trailing: Image.asset("assets/avatar.png"),
                                ),
                              );
                            },
                          ),
                  ),
                  Row(
                    children: [
                      Expanded(
                        child: TextField(
                          controller: _controller,
                          decoration: const InputDecoration(
                            hintText: 'Type your message here...',
                          ),
                          onChanged: (value) {
                            setState(() {
                              _showQuestions = value.isEmpty;
                            });
                          },
                        ),
                      ),
                      IconButton(
                        icon: const Icon(Icons.send),
                        onPressed: () {
                          setState(() {
                            _messages.add(_controller.text);
                            _controller.clear();
                          });
                        },
                      ),
                    ],
                  ),
                ],
              ),
            );
          }
        },
      ),
    );
  }

  Widget _buildQuestionButton(String text, BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          primary: const Color(0xFFFCBCB8),
        ),
        onPressed: () {
          setState(() {
            _controller.text = text;
            _showQuestions = false;
          });
        },
        child: Text(text),
      ),
    );
  }
}
