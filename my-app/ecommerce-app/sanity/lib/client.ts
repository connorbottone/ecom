import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skcXX4EqlnOEP9yduMOGaPYELt6O7uhRFuPon55ItdrVDbTRpt7HSFzH3GJlrdE8LorXBN3ZxA4WQKhGFKE8hacXCR0eDCL2oTokRguHLOuCXcqtMxIS3dGSb4BFqt1Cxq610xLGzxpJSiiSByt1aFQDLwyjKOKmvVRs1zvYhg4egqQqB64V"
})
