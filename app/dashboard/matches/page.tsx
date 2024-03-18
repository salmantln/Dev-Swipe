import {
  Badge,
  Card,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { Menu } from "@headlessui/react";
import { MyDropdown } from "@/dashboard_components/DropDownMenu";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

const candidates = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    status: "active",
  },
  {
    name: "Albert Rösti",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    status: "active",
  },
  {
    name: "Beat Jans",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    status: "active",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    status: "active",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
    departement: "The Federal Department of Finance (FDF)",
    status: "active",
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of Economic Affairs, Education and Research (EAER)",
    status: "active",
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "The Federal Department of Home Affairs (FDHA)",
    status: "active",
  },
];

const MatchesPage = async () => {
  const { data } = await readUserSession();

  console.log(data.session?.user.user_metadata);

  if (!data.session?.user.user_metadata?.onboarding) {
    return redirect("/onboarding");
  } else if (!data.session) {
    return redirect("/login");
  }


  return (
    <>
      <h1 className=" mb-4 text-xl md:text-2xl">Matches</h1>
      <div className="mb-4 text-start font-mono text-sm text-slate-500">
        Select a job where you want to see the matches.
      </div>
      <Select defaultValue="1">
        <SelectItem value="1">Option One</SelectItem>
        <SelectItem value="2">Option Two</SelectItem>
        <SelectItem value="3">Option Three</SelectItem>
      </Select>

      <Card>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>First Name</TableHeaderCell>
              <TableHeaderCell>Last Name</TableHeaderCell>
              <TableHeaderCell>Study</TableHeaderCell>
              <TableHeaderCell>Age</TableHeaderCell>
              <TableHeaderCell>Date Created</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((item: any) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.Role}</TableCell>
                <TableCell>None</TableCell>
                <TableCell>25</TableCell>
                <TableCell>2000-12-12</TableCell>
                <TableCell>
                  <Badge color={"emerald"}>Interested </Badge>
                </TableCell>
                <TableCell>
                  <MyDropdown />
                </TableCell>
                <TableCell>
                  {/* <Badge color="emerald" icon={RiFlag2Line}>
                  {item.status}
                </Badge> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default MatchesPage;

