// "use client"

import {
  Card,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from "@tremor/react";
const data = [
  {
    name: "Socialmedia Marketeer",
    Role: "3500 & 17000",
    departement:
      "2024-02-28",
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

import { readJob } from "@/lib/jobs";

export const CreatedJobsTable = async () => {
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const user = supabase.auth.getUser(); // Get the authenticated user
      
  //     if (user) {
  //       const { data, error } = await supabase
  //         .from('job_posts') // Adjust with your table name
  //         .select('*')
  //         .eq('company_id', (await user).data.user?.id); // Adjust 'user_id' to match your column name

  //       if (error) {
  //         console.error('Error fetching jobs:', error);
  //       } else {
  //         setJobs(data.values);
  //       }
  //     }
  //   };

  //   fetchJobs();
  // }, []);

  const {data: jobs} = await readJob()


  console.log("Read jobs: ",jobs)
  return (
    <div className="flex-auto w-full">
      {/* Assuming Card, Table, TableHead, TableRow, TableHeaderCell, 
      TableBody, TableCell components are already defined/imported */}
      <Card>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Salary Range</TableHeaderCell>
              <TableHeaderCell>Date Created</TableHeaderCell>
              <TableHeaderCell>Active</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs?.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{`${job.min_pay} - ${job.max_pay}`}</TableCell>
                <TableCell>{/* Display date created */}</TableCell>
                <TableCell>
                  <Switch checked={job.active} />
                </TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};