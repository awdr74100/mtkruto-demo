import { Client } from "@mtkruto/node";
import input from "@inquirer/input";

async function init() {
  const apiId = process.env.apiId!;
  const apiHash = process.env.apiHash!;

  const client = new Client(null, +apiId, apiHash);

  await client.start({
    phone: () => input({ message: "Phone?" }),
    code: () => input({ message: "Code?" }),
    password: () => input({ message: "Password?" }),
  });

  console.log("Hello World");
}

init();
