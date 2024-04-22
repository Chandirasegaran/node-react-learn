export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  ruby: "3.0.1",
  go: "1.16.2",
  rust: "1.68.2",
  swift: "5.3.3",
  c: "10.2.0",
  cpp: "10.2.0",
  dart: "2.19.6",
  perl: "5.36.0",
  raku: "6.100.0",
  kotlin: "1.8.20",
  lua: "5.4.4",
  haskell: "9.0.1",
  julia: "1.8.5",
  coffeescript: "2.5.1",
  csharp_net: "5.0.201",
  fsharp_net: "5.0.201",
  basic_net: "5.0.201",
  python2: "2.7.18",
  elixir: "1.11.3",
  emacs: "27.1.0",
  erlang: "23.0.0",
  forth: "0.7.3",
  freebasic: "1.9.0",
  groovy: "3.0.7",
  nasm: "2.15.5",
  nim: "1.6.2",
  ocaml: "4.12.0",
  octave: "8.1.0",
  perl: "5.36.0",
  ponylang: "0.39.0",
  prolog: "8.2.4",
  pure: "0.68.0",
  powershell: "7.1.4",
  rscript: "4.1.1",
  racket: "8.3.0",
  ruby: "3.0.1",
  scala: "3.2.2",
  sqlite3: "3.36.0",
  vlang: "0.3.3",
  zig: "0.10.1",
  bash: "5.2.0",
  befunge93: "0.2.0",
  bqn: "1.0.0",
  brachylog: "1.0.0",
  brainfuck: "2.7.3",
  cjam: "0.6.5",
  clojure: "1.10.3",
  cobol: "3.1.2",
  cow: "1.0.0",
  crystal: "0.36.1",
  dash: "0.5.11",
  fsi: "5.0.201",
  dragon: "1.9.8",
  file: "0.0.1",
  forte: "1.0.0",
  golfscript: "1.0.0",
  husk: "1.0.0",
  iverilog: "11.0.0",
  japt: "2.0.0",
  jelly: "0.1.31",
  lisp: "2.1.2",
  llvm_ir: "12.0.1",
  lolcode: "0.11.2",
  paradoc: "0.6.0",
  pascal: "3.2.2",
  pyth: "1.0.0",
  raku: "6.100.0",
  retina: "1.2.0",
  rockstar: "1.0.0",
  ruby: "3.0.1",
  samarium: "0.3.1",
  smalltalk: "3.2.3",
  swift: "5.3.3",
  vlang: "0.3.3",
  vyxal: "2.4.1",
  yeethon: "3.10.0",
  zig: "0.10.1",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
  ruby: `def greet(name)\n\tputs "Hello, #{name}!"\nend\n\ngreet("Alex")\n`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}\n`,
  rust: `fn main() {\n\tprintln!("Hello, World!");\n}\n`,
  swift: `func greet(name: String) {\n\tprint("Hello, \\(name)!")\n}\n\ngreet(name: "Alex")\n`,
  c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello, World!\\n");\n\treturn 0;\n}\n`,
  cpp: `#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!" << std::endl;\n\treturn 0;\n}\n`,
  dart: `void main() {\n\tprint('Hello, World!');\n}\n`,
  perl: `#!/usr/bin/perl\n\nprint "Hello, World!\\n";\n`,
  raku: `say "Hello, World!";\n`,
  kotlin: `fun main() {\n\tprintln("Hello, World!")\n}\n`,
  lua: `print("Hello, World!")\n`,
  haskell: `main = putStrLn "Hello, World!"\n`,
  julia: `println("Hello, World!")\n`,
  coffeescript: `\ngreet = (name) ->\n\tconsole.log "Hello, #{name}!"\n\ngreet "Alex"\n`,
  csharp_net:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  fsharp_net:
    'open System\n\n[<EntryPoint>]\nlet main argv = \n    printfn "Hello World in F#"\n    0\n',
  basic_net:
    'Module HelloWorld\n    Sub Main()\n        Console.WriteLine("Hello World in Basic.NET")\n    End Sub\nEnd Module\n',
  python2: `print "Hello, World!"\n`,
  elixir: `defmodule Hello do\n  def hello(name) do\n    IO.puts "Hello, #{name}!"\n  end\nend\n\nHello.hello("Alex")\n`,
  emacs: `(message "Hello, World!")\n`,
  erlang: `-module(hello).\n-export([hello_world/0]).\n\nhello_world() ->\n    io:fwrite("Hello, World!\\n").\n`,
  forth: `: hello ." Hello, World!" ;\nhello\n`,
  freebasic: `Print "Hello, World!"\n`,
  groovy: `println 'Hello, World!'\n`,
  nasm: `section .data\n\thello db 'Hello, World!',0\nsection .text\n\tglobal _start\n\n_start:\n\tmov eax, 4\n\tmov ebx, 1\n\tmov ecx, hello\n\tmov edx, 13\n\tint 0x80\n\tmov eax, 1\n\tint 0x80\n`,
  nim: `echo "Hello, World!"\n`,
  ocaml: `print_endline "Hello, World!";;\n`,
  octave: `printf("Hello, World!\\n");\n`,
  ponylang: `actor Main\n  new create(env: Env) =>\n    env.out.print("Hello, World!")\n`,
  prolog: `main :-\n    write('Hello, World!'), nl.\n`,
  pure: `io.print("Hello, World!")\n`,
  powershell: `Write-Host "Hello, World!"\n`,
  rscript: `cat("Hello, World!\\n")\n`,
  racket: `#lang racket\n(display "Hello, World!")\n`,
  ruby: `puts "Hello, World!"\n`,
  scala: `object HelloWorld {\n  def main(args: Array[String]): Unit = {\n    println("Hello, World!")\n  }\n}\n`,
  sqlite3: `SELECT 'Hello, World!';\n`,
  vlang: `fn main() {\n    println("Hello, World!")\n}\n`,
  zig: `const std = @import("std");\n\npub fn main() void {\n    const stdout = std.io.getStdOut();\n    try stdout.print("Hello, World!\\n");\n    defer stdout.flush();\n}\n`,
  bash: `#!/bin/bash\n\necho "Hello, World!"\n`,
  befunge93: `>25*"!dlroW ,olleH":v\n\t\tv:,_@`,
  bqn: `∊"Hello, World!"\n`,
  brachylog: `o:0'Hello, World!'\n`,
  brainfuck: `-[------->+<]>-.-[->+++++<]>++.+++++++..+++.[--->+<]>-----.---[->+++<]>.-[--->+<]>---.+++.------.--------.-[--->+<]>.\n`,
  cjam: `"Hello, World!"`,
  clojure: `(println "Hello, World!")\n`,
  cobol: `       IDENTIFICATION DIVISION.\n       PROGRAM-ID. Hello.\n       PROCEDURE DIVISION.\n           DISPLAY "Hello, World!".\n       STOP RUN.\n`,
  cow: `oO\n Hello, World!\n   (__)\n   (oo)\n  /\\/\\ \n /    \\ \n/      \\ \n`,
  crystal: `puts "Hello, World!"\n`,
  dash: `echo 'Hello, World!'\n`,
  fsi: `printfn "Hello, World!"\n`,
  dragon: `say "Hello, World!"\n`,
  file: `(echo "Hello, World!" && false) || echo "Hello, World!"\n`,
  forte: `write("Hello, World!")\n`,
  golfscript: `"Hello, World!"`,
  husk: `Ṡ"Hello, World!"\n`,
  iverilog: `initial begin\n    $display("Hello, World!");\n    $finish;\nend\n`,
  japt: `“Hello, World!”\n`,
  jelly: `“Hello, World!”`,
  lisp: `(format t "Hello, World!")\n`,
  llvm_ir: `@.str = private unnamed_addr constant [14 x i8] c"Hello, World!\\0A\\00", align 1\n\ndefine i32 @main() {\nentry:\n  %call = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([14 x i8], [14 x i8]* @.str, i32 0, i32 0))\n  ret i32 0\n}\n`,
  lolcode: `HAI\n  CAN HAS STDIO?\n  VISIBLE "Hello, World!"\nKTHXBYE\n`,
  paradoc: `“Hello, World!”\n`,
  pascal: `program HelloWorld;\nbegin\n  writeln('Hello, World!');\nend.\n`,
  pyth: `O"Hello, World!"\n`,
  retina: `“Hello, World!”\n`,
  rockstar: `Say "Hello, World!"\n`,
  rscript: `cat("Hello, World!\\n")\n`,
  ruby: `puts "Hello, World!"\n`,
  samarium: `.“Hello, World!”`,
  smalltalk: `Transcript show: 'Hello, World!'; cr.\n`,
  vyxal: `‛Hello, World!’\n`,
  yeethon: `print("Hello, World!")\n`,
  zig: `const std = @import("std");\n\npub fn main() void {\n    const stdout = std.io.getStdOut();\n    try stdout.print("Hello, World!\\n");\n    defer stdout.flush();\n}\n`
};

export const LANGUAGES = [
  "javascript",
  "typescript",
  "python",
  "java",
  "csharp",
  "php",
  "ruby",
  "go",
  "rust",
  "swift",
  "c",
  "cpp",
  "dart",
  "perl",
  "raku",
  "kotlin",
  "lua",
  "haskell",
  "julia",
  "coffeescript",
  "csharp_net",
  "fsharp_net",
  "basic_net",
  "python2",
  "elixir",
  "emacs",
  "erlang",
  "forth",
  "freebasic",
  "groovy",
  "nasm",
  "nim",
  "ocaml",
  "octave",
  "ponylang",
  "prolog",
  "pure",
  "powershell",
  "rscript",
  "racket",
  "ruby",
  "scala",
  "sqlite3",
  "vlang",
  "zig",
  "bash",
  "befunge93",
  "bqn",
  "brachylog",
  "brainfuck",
  "cjam",
  "clojure",
  "cobol",
  "cow",
  "crystal",
  "dash",
  "fsi",
  "dragon",
  "file",
  "forte",
  "golfscript",
  "husk",
  "iverilog",
  "japt",
  "jelly",
  "lisp",
  "llvm_ir",
  "lolcode",
  "paradoc",
  "pascal",
  "pyth",
  "raku",
  "retina",
  "rockstar",
  "rscript",
  "ruby",
  "samarium",
  "smalltalk",
  "vyxal",
  "yeethon",
  "zig"
];



