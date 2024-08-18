const capitalPasswordValidation = {
  pattern: /(?=.*[A-Z])/,
  message: "Password must contain at least one capital letter"
}
const symbolPasswordValidation = {
  pattern: /(?=.*[!@#$%^&*()_+\-=[\]{}:';"\\|,.<>\/?])/,
  message: "Password must contain at least one symbol"
}
const numberPasswordValidation = {
  pattern: /(?=.*\d)/,
  message: "Password must contain at least one number"
}

export {capitalPasswordValidation, symbolPasswordValidation, numberPasswordValidation}

const carsYear = [
  { year: 1980 },
  { year: 1981 },
  { year: 1982 },
  { year: 1983 },
  { year: 1984 },
  { year: 1985 },
  { year: 1986 },
  { year: 1987 },
  { year: 1988 },
  { year: 1989 },
  { year: 1990 },
  { year: 1991 },
  { year: 1992 },
  { year: 1993 },
  { year: 1994 },
  { year: 1995 },
  { year: 1996 },
  { year: 1997 },
  { year: 1998 },
  { year: 1999 },
  { year: 2000 },
  { year: 2001 },
  { year: 2002 },
  { year: 2003 },
  { year: 2004 },
  { year: 2005 },
  { year: 2006 },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
  { year: 2013 },
  { year: 2014 },
  { year: 2015 },
  { year: 2016 },
  { year: 2017 },
  { year: 2018 },
  { year: 2019 },
  { year: 2020 },
  { year: 2021 },
  { year: 2022 },
  { year: 2023 },
  { year: 2024 },
];


export {carsYear};