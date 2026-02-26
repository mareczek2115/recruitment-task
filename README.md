# Zadanie rekrutacyjne — Data Visualization (Frontend)

Na podstawie danych e-commerce z `data.json` przygotowano 3 wykresy, które pokazują:
- trend przychodu w czasie,
- strukturę przychodu po kategoriach,
- rozkład liczby zamówień po krajach.

## Kluczowe dane i agregacje
Do wizualizacji wykorzystano pola:
- `timestamp` - pozwala zbudować oś czasu i pokazać dynamikę sprzedaży,
- `category` - pokazuje, które grupy produktów napędzają wynik,
- `country` - pokazuje, gdzie aktywność zakupowa jest największa,
- `quantity` i `unitPrice` - razem dają realną wartość biznesową (przychód).

Agregacje:
- przychód: `quantity * unitPrice`,
- przychód dzienny: suma przychodu po dniu (`YYYY-MM-DD`),
- przychód według kategorii: suma przychodu po `category`,
- liczba zamówień według kraju: zliczenie rekordów po `country`.

## Wykresy
| Wykres | Typ | Co pokazuje | Dlaczego taki wykres |
| --- | --- | --- | --- |
| Trend przychodu dziennego | `line` | Zmianę przychodu w czasie | Pokazuje, czy biznes rośnie czy spada w kolejnych dniach, pozwala szybko wyłapać anomalie |
| Przychód według kategorii | `column` | Porównanie wartości przychodu między kategoriami | Pozwala określić, które kategorie realnie napędzają wynik i gdzie warto wzmacniać ofertę |
| Liczba zamówień według kraju | `bar` | Ranking krajów według liczby zamówień | Pokazuje, na których rynkach popyt jest najwyższy i gdzie warto kierować działania sprzedażowe |

## Stack technologiczny
- React 19 + TypeScript
- Vite
- Highcharts (`highcharts`, `highcharts-react-official`)
- Chakra UI
- Vitest

## Uruchomienie
Wymagania:
- Node.js 20+,
- pnpm

Kroki:
1. Sklonuj repozytorium
```bash
git clone https://github.com/mareczek2115/recruitment-task.git
```

2. Zainstaluj zależności:
```bash
pnpm install
```
3. Uruchom projekt (dev):
```bash
pnpm dev
```
Otwórz adres podany przez Vite (domyślnie `http://localhost:5173`).

## Dodatkowe komendy
Uruchom testy:
```bash
pnpm test
```
