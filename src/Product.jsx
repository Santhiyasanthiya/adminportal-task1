import React from 'react'
import {Link} from "react-router-dom";

function Products() {
  return (
    // <!-- Begin Page Content -->
    <div class="container-fluid">


        {/* <!-- Page Heading --> */}
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Products</h1>
            <Link  to="/portal/create-product" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
        </div>

        {/* <!-- DataTales Example --> */}
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>RAM</th>
                                <th>ROM</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>RAM</th>
                                <th>ROM</th>
                                <th>Color</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>iPhone</td>
                                <td>14-Pro Max</td>
                                <td>RS.1,24,990</td>
                                <td>6-GB</td>
                                <td>256-GB</td>
                                <td>White and Black</td>
                            </tr>
                            <tr>
                                <td>One-Plus</td>
                                <td>Nord CE 2 </td>
                                <td>RS.18,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Blue and Silver</td>
                            </tr>
                            <tr>
                                <td>Samsung</td>
                                <td>Galaxy M52 </td>
                                <td>RS.19,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Multi-Colors(Available)</td>
                            </tr>
                            <tr>
                                <td>Realme</td>
                                <td>9i </td>
                                <td>RS.14,999</td>
                                <td>4-GB</td>
                                <td>64-GB</td>
                                <td>Gold and Black</td>
                            </tr>
                            <tr>
                                <td>Vivo</td>
                                <td>V25 Pro</td>
                                <td>RS,35,999</td>
                                <td>8-GB</td>
                                <td>256-GB</td>
                                <td>Blue and White</td>
                            </tr>

                            <tr>
                                <td>iPhone</td>
                                <td>12</td>
                                <td>RS.53,749</td>
                                <td>4-GB</td>
                                <td>64-GB</td>
                                <td>White</td>
                            </tr>
                            <tr>
                                <td>One-Plus</td>
                                <td>Nord 2T </td>
                                <td>RS.28,999</td>
                                <td>8-GB</td>
                                <td>128-GB</td>
                                <td>Black</td>
                            </tr>
                            <tr>
                                <td>Samsung</td>
                                <td>Galaxy F23 </td>
                                <td>RS.15,999</td>
                                <td>8-GB</td>
                                <td>128-GB</td>
                                <td>Sky-Blue</td>
                            </tr>
                            <tr>
                                <td>Realme</td>
                                <td>C35</td>
                                <td>RS.13,999</td>
                                <td>4-GB</td>
                                <td>64-GB</td>
                                <td>Multi-Colors(Available)</td>
                            </tr>
                            <tr>
                                <td>Vivo</td>
                                <td>Y35</td>
                                <td>RS,17,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Multi-Colors(Available)</td>
                            </tr>

                            <tr>
                                <td>iPhone</td>
                                <td>13-Pro Max</td>
                                <td>RS.1,18,740</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Blue, Yellow, Black and White</td>
                            </tr>
                            <tr>
                                <td>One-Plus</td>
                                <td>10 PRO</td>
                                <td>RS.61,999</td>
                                <td>8-GB</td>
                                <td>256-GB</td>
                                <td>White</td>
                            </tr>
                            <tr>
                                <td>Samsung</td>
                                <td>Galaxy S20 FE </td>
                                <td>RS.33,071</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Gold, Blue and White</td>
                            </tr>
                            <tr>
                                <td>Realme</td>
                                <td>7 PRO </td>
                                <td>RS.21,999</td>
                                <td>8-GB</td>
                                <td>128-GB</td>
                                <td>Blue and Silver</td>
                            </tr>
                            <tr>
                                <td>Vivo</td>
                                <td>T1 44W</td>
                                <td>RS,14,499</td>
                                <td>4-GB</td>
                                <td>64-GB</td>
                                <td>Blue and White</td>
                            </tr>

                            <tr>
                                <td>iPhone</td>
                                <td>9</td>
                                <td>RS.29,990</td>
                                <td>3-GB</td>
                                <td>64-GB</td>
                                <td>Blue and White</td>
                            </tr>
                            <tr>
                                <td>One-Plus</td>
                                <td>Nord CE 2 </td>
                                <td>RS.18,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Multi-Color(Available)</td>
                            </tr>
                            <tr>
                                <td>Samsung</td>
                                <td>Galaxy M52 </td>
                                <td>RS.19,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Black</td>
                            </tr>
                            <tr>
                                <td>Realme</td>
                                <td>9i </td>
                                <td>RS.14,999</td>
                                <td>4-GB</td>
                                <td>64-GB</td>
                                <td>Silver</td>
                            </tr>
                            <tr>
                                <td>Vivo</td>
                                <td>V25 Pro</td>
                                <td>RS,35,999</td>
                                <td>8-GB</td>
                                <td>256-GB</td>
                                <td>Blue and White</td>
                            </tr>

                            <tr>
                                <td>iPhone</td>
                                <td>SE 2020</td>
                                <td>RS.29,749</td>
                                <td>3-GB</td>
                                <td>64-GB</td>
                                <td>Crimson</td>
                            </tr>
                            <tr>
                                <td>One-Plus</td>
                                <td>Nord CE 2 </td>
                                <td>RS.18,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Glucier and Gold</td>
                            </tr>
                            <tr>
                                <td>Samsung</td>
                                <td>Galaxy M52 </td>
                                <td>RS.19,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Multi-Colors(Available)</td>
                            </tr>
                            <tr>
                                <td>Realme</td>
                                <td>9i </td>
                                <td>RS.14,999</td>
                                <td>4-GB</td>
                                <td>64-GB</td>
                                <td>Gold</td>
                            </tr>
                            <tr>
                                <td>Vivo</td>
                                <td>V25 Pro</td>
                                <td>RS,35,999</td>
                                <td>8-GB</td>
                                <td>256-GB</td>
                                <td>Blue and White</td>
                            </tr>

                            <tr>
                                <td>iPhone</td>
                                <td>XR</td>
                                <td>RS.39,999</td>
                                <td>3-GB</td>
                                <td>64-GB</td>
                                <td>Black</td>
                            </tr>
                            <tr>
                                <td>One-Plus</td>
                                <td>Nord CE 2 </td>
                                <td>RS.18,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Black and White</td>
                            </tr>
                            <tr>
                                <td>Samsung</td>
                                <td>Galaxy M52 </td>
                                <td>RS.19,999</td>
                                <td>6-GB</td>
                                <td>128-GB</td>
                                <td>Multi-Color(Available)</td>
                            </tr>
                            <tr>
                                <td>Realme</td>
                                <td>9i </td>
                                <td>RS.14,999</td>
                                <td>4-GB</td>
                                <td>64-GB</td>
                                <td>Multi-Color(Available)</td>
                            </tr>
                            <tr>
                                <td>Vivo</td>
                                <td>V25 Pro</td>
                                <td>RS,35,999</td>
                                <td>8-GB</td>
                                <td>256-GB</td>
                                <td>Blue and White</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
)
}
export default Products;