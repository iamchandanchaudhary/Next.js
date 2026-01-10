"use server"
import fs from "fs/promises";

export const submitAction = async(e) => {
    console.log(e.get("name"), e.get("course"));

    const a = fs.writeFile(`${e.get("name")}.txt`, `Name: ${e.get("name")}, Course: ${e.get("course")}`);
}