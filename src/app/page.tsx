"use client"
import { Button, Chip, Input } from "@nextui-org/react"
import Link from "next/link"
import React, { useState } from "react"

interface clienteProps {
  clientName: string
}

export default function Home({ clientName }: clienteProps) {
  const [username, setUsername] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
    console.log(username)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-violet-50 text-black">
      <div className="flex max-w-96 flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl underline underline-offset-4 text-violet-500">
            Habits
          </span>
          <Chip
            className="font-bold"
            size="sm"
            radius="full"
            variant="flat"
            color="secondary"
          >
            Beta
          </Chip>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">
            Transforme pequenas ações em grandes conquistas...
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <h2 className="font-semibold text-violet-700 opacity-80">
              Habitue-se a ser extraordinário
            </h2>
          </div>
          <p className="text-justify opacity-80">
            Desperte seus hábitos extraordinários com{" "}
            <strong className="underline underline-offset-2">Habits</strong>!
            seu aliado para superar a procrastinação e alcançar altos níveis de
            produtividade.
          </p>
          <p className="">Transforme o ordinário em extraordinário!</p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <Input
            value={username}
            label="Nome"
            isClearable
            type="text"
            placeholder="Como podemos lhe chamar?"
            variant="flat"
            color="secondary"
            className="font-bold"
            onChange={handleChange}
          />
          <Link href="/dashboard">
            <Button
              size={"lg"}
              className="font-bold"
              variant="flat"
              color="secondary"
            >
              Acessar como Beta
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
