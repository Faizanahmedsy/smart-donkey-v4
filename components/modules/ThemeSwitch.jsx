"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme("system");
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [checked, setChecked] = useState(false);

  // console.log("theme", theme);
  // console.log("isThemeDark", isThemeDark);
  // console.log("checked", checked);

  useEffect(() => {
    const checkTheSystemThemeIsDark =
      document.documentElement.classList.contains("dark");

    // console.log(
    //   "checkTheSystemThemeIsDark",
    //   checkTheSystemThemeIsDark,
    //   "document.documentElement.classList",
    //   document.documentElement.classList,
    //   'document.documentElement.classList.contains("dark")',
    //   document.documentElement.classList.contains("dark"),
    //   'document.documentElement.classList.contains("light")',
    //   document.documentElement.classList.contains("light"),
    //   'document.documentElement.classList.contains("system")',
    //   document.documentElement.classList.contains("system"),
    //   'document.documentElement.classList.contains("auto")',
    //   document.documentElement.classList.contains("auto"),
    //   "document.documentElement.cl"
    // );

    if (checkTheSystemThemeIsDark) {
      setChecked(true);
      setIsThemeDark(true);
    } else {
      setIsThemeDark(false);
      setChecked(false);
    }

    //---------------ENABLE THIS IF YOU WANT TO AUTOMATICALLY SET THE THEME AS PER USERS THEME PREFERENCE---------

    // const theme = localStorage.getItem("theme");
    // if (theme) {
    //   setTheme(theme);
    // } else {
    //   setTheme("system");
    // }
  }, []);

  return (
    <div className="m-auto">
      <Switch
        aria-readonly
        checked={checked}
        onCheckedChange={(e) => {
          // console.log(e);

          if (e) {
            // document.documentElement.classList.add("dark");
            // document.documentElement.classList.remove("light");
            // document.documentElement.style.colorScheme = "dark";
            setTheme("dark");
            setChecked(true);

            //Add to local storage

            //---------------ENABLE THIS IF YOU WANT TO SAVE THE USERS THEME PREFERENCE---------
            // localStorage.setItem("theme", "dark");
          } else {
            // document.documentElement.classList.remove("dark");
            // document.documentElement.classList.add("light");
            // //change thie styles color scheme to light
            // document.documentElement.style.colorScheme = "light";
            setTheme("light");
            setChecked(false);

            //Add to local storage

            //---------------ENABLE THIS IF YOU WANT TO SAVE THE USERS THEME PREFERENCE---------

            // localStorage.setItem("theme", "light");
          }
        }}
      />
    </div>
  );
};

export default ThemeSwitch;
