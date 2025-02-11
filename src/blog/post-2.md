---
title: "Entendendo `if __name__ == "__main__"` em Python"
pubDate: 2025-02-10
description: "Domine o segredo que existe por baixo dos panos do Python!"
author: "Salvador Tomocene"
image:
  url: "/images/python-listas-dicionarios.jpg"
  alt: "Código Python manipulando listas e dicionários"
tags: ["Python", "Programação", "Condiconais", "Fundamentos"]
---

*Aqui está um roteiro claro e prático para sua aula de 5 minutos sobre `if __name__ == "__main__"` em Python.*


## 🎥 Entendendo `if __name__ == "__main__"` em Python**

### **1. Introdução **
📌 **O que significa?**  
Em Python, cada arquivo pode ser executado de duas formas:  
1. Diretamente como um script.  
2. Importado como um módulo em outro script.  

A linha `if __name__ == "__main__":` permite que o código dentro dela **só seja executado quando o arquivo for rodado diretamente**, evitando que ele seja executado ao ser importado.

### **2. Explicação Simples **
📌 **Entendendo `__name__`**  
- Todo arquivo Python tem uma variável especial chamada `__name__`.  
- Se o arquivo for executado diretamente, `__name__` será `"__main__"`.  
- Se o arquivo for importado, `__name__` será o nome do módulo.  

✏️ **Exemplo 1 – Testando `__name__`:**
```py
# arquivo exemplo.py
print(f"O nome deste script é: {__name__}")
```
🔹 **Executando no terminal**  
```sh
python exemplo.py
# Saída: O nome deste script é: __main__
```
🔹 **Importando de outro arquivo:**
```py
import exemplo
# Saída: O nome deste script é: exemplo
```

### **3. Exemplo Prático **
📌 **Evitar execução de código ao importar**  
✏️ **Exemplo 2 – Código seguro para importação**  
```py
# arquivo principal.py
def saudacao():
    print("Olá! Este script está rodando diretamente.")

if __name__ == "__main__":
    saudacao()
```
🔹 **Executando diretamente:**  
```sh
python principal.py
# Saída: Olá! Este script está rodando diretamente.
```
🔹 **Importando de outro arquivo:**  
```py
import principal  # Nenhuma saída, pois o código dentro do if não roda
```

### **4. Conclusão (30 seg)**
✅ **Quando usar?**  
- Se seu script tiver funções úteis que podem ser importadas sem serem executadas imediatamente.  
- Para separar lógica principal de módulos reutilizáveis.  

💡 **Resumo:**  
O `if __name__ == "__main__":` garante que certas partes do código **só rodem quando o arquivo for executado diretamente**, tornando seu código mais organizado e reutilizável.  


Isso cobre o essencial em 5 minutos com teoria e prática. Quer que eu ajuste algo?