type IAccount = {
  id: number;
  email: string;
  authToken: string;
  creationDate: string;
}

const accounts:IAccount[] = [
  { id: 1, email: "user1@example.com", authToken: "abc123", creationDate: "2024-01-15" },
  { id: 2, email: "user2@example.com", authToken: "xyz456", creationDate: "2024-01-16" },
  { id: 3, email: "user3@example.com", authToken: "def789", creationDate: "2024-01-17" },
  { id: 4, email: "user4@example.com", authToken: "ghi101", creationDate: "2024-01-18" },
  { id: 5, email: "user5@example.com", authToken: "jkl202", creationDate: "2024-01-19" },
  { id: 6, email: "user6@example.com", authToken: "mno303", creationDate: "2024-01-20" },
  { id: 7, email: "user7@example.com", authToken: "pqr404", creationDate: "2024-01-21" },
  { id: 8, email: "user8@example.com", authToken: "stu505", creationDate: "2024-01-22" },
  { id: 9, email: "user9@example.com", authToken: "vwx606", creationDate: "2024-01-23" },
  { id: 10, email: "user10@example.com", authToken: "yz707", creationDate: "2024-01-24" },
  { id: 11, email: "user11@example.com", authToken: "123808", creationDate: "2024-01-25" },
  { id: 12, email: "user12@example.com", authToken: "456909", creationDate: "2024-01-26" },
  { id: 13, email: "user13@example.com", authToken: "789010", creationDate: "2024-01-27" },
  { id: 14, email: "user14@example.com", authToken: "111112", creationDate: "2024-01-28" },
  { id: 15, email: "user15@example.com", authToken: "131313", creationDate: "2024-01-29" },
  { id: 16, email: "user16@example.com", authToken: "151414", creationDate: "2024-01-30" },
  { id: 17, email: "user17@example.com", authToken: "161515", creationDate: "2024-01-31" },
  { id: 18, email: "user18@example.com", authToken: "181616", creationDate: "2024-02-01" },
  { id: 19, email: "user19@example.com", authToken: "191717", creationDate: "2024-02-02" },
  { id: 20, email: "user20@example.com", authToken: "202818", creationDate: "2024-02-03" }
];

export default accounts;
