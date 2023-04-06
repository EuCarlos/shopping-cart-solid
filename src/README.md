# S.O.L.I.D
conteudo retirado do curso JAVASCRIPT E TYPESCRIPT DO ÓTAVIO MIRANDA

## O que são princípios S.O.L.I.D
São 5 principios da programação* que foram reunidos para nos ajudar a manter um código limpo, flex´vel e fácil de ser mantido.

*Geralmente relacionados com a programação em geral.

### S
**Single Responsibilty Principle - SRP** (Principio da responsabilidade única) - uma classe deve ter apenas um motivo para mudar (evite conjunções aditivas: e, bem como, também...). Este principio está intimamente ligado com outro, conhecido com **Separation of concerns**.

### O
**Open/Closed Principle - OCP** (Princípio do Aberto/Fechado) - Princípio do Aberto/Fechado - módulos, classes, objetos e operações devem estar abertos para extensão, mas fechados para modificações.

### L
**Liskov Substitution Principle - LSP** (Princípio da Substituição de Liskov) - Se ∅(x) é uma propriedade demonstravel dos objetos x de tipo T. Então ∅(y) debe ser verdadeiro para objetos y de tipo S onde S é um subtipo de T. (Subtipos precisam ser substituibeis por seus tipos de base)

**OBS.:** Símbolos de conjunto vazio podem ser representados: `∅` e `{}`

### I
**Interface Segregation Principle - ISP** (Princípio da Segregação de Interface) - os clientes não devem ser forçados a depender de interfaces que não utilizam.

### D
**Dependency Inversion Principle - DIP** (Princípio da Inversão de Dependência) - módulos de alto nível não devem ser dependentes do módulos de baixo nível; ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso.