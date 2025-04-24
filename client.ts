import client from "@sanity/client";

export default client({
  projectId: "vcc0kq6m",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
