import { Button, Tooltip } from "@nextui-org/react"
import { Home, Info, PanelLeft, PlusCircle, Settings } from "lucide-react"

export function Sidebar() {
  let activeSidebar = false
  const appNavigations = [
    {
      name: "Página inicial",
      icon: <Home />,
      content: "Página inicial",
      active: true,
    },
    {
      name: "Adicionar",
      icon: <PlusCircle />,
      content: "Adicionar hábito",
      active: false,
    },
    {
      name: "Info",
      icon: <Info />,
      content: "Informações",
      active: false,
    },
  ]

  return (
    <aside className="flex flex-col fixed left-0 w-24 h-full items-center justify-between py-8">
      <Tooltip
        showArrow={true}
        placement="right"
        color="secondary"
        content={
          activeSidebar ? "Fechar barra lateral" : "Expandir barra lateral"
        }
      >
        <Button color="secondary" isIconOnly radius="lg" variant="light">
          <PanelLeft />
        </Button>
      </Tooltip>

      <nav className="flex flex-col items-center justify-center gap-4">
        {appNavigations.map((item, index) => (
          <Tooltip
            key={index}
            showArrow={true}
            placement="right"
            color="secondary"
            content={item.content}
          >
            <Button
              isIconOnly
              radius="lg"
              variant={item.active ? "flat" : "light"}
              color="secondary"
            >
              {item.icon}
            </Button>
          </Tooltip>
        ))}
      </nav>
      <Button color="secondary" variant="flat" isIconOnly radius="lg">
        <Settings />
      </Button>
    </aside>
  )
}
