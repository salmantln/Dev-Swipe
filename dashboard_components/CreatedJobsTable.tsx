import { RiFlag2Line } from "@remixicon/react";
import {
  Badge,
  Card,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
const data = [
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

export const CreatedJobsTable = () => {
  return (
    <div className="flex-auto w-full">
      <Card>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Salary range </TableHeaderCell>
              <TableHeaderCell>Date Created</TableHeaderCell>
              <TableHeaderCell>Active</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-bold text-cyan-700 hover:text-sky-400 hover:underline hover:cursor-pointer">
                  {item.name}
                </TableCell>
                <TableCell>{item.Role}</TableCell>
                <TableCell>{item.departement}</TableCell>
                <TableCell>
                  {/* <Badge color="emerald" icon={RiFlag2Line}>
                  {item.status}
                </Badge> */}
                  <Switch />
                </TableCell>

                <TableCell className="underline hover:cursor-pointer hover:text-sky-400">
                  Edit
                  {/* <Badge color="red" icon={RiFlag2Line}>
                  {item.status}
                </Badge> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
