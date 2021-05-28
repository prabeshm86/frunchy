import React, { Component } from "react";
import logo from '../../images/main_logo.png';
// import disimg from '../../images/DSC_0795.JPG';
class Home extends Component {
  render() {
    return (
      <div>
	<table id="tabhgOrders" className="table table-hover scrollable fixedheader js-dynamitable hg" tb="vQ5KitOHQWjSkQvFd5356g==" kf="EhlCmpVXDgkXwbbPoxLEUA==" as="F8G2z6MSxFA=" gas="1">
<thead>
<tr>
<th className="hgTitle" colspan="2" ><table className="hgTitleSplitter"><tbody><tr><td>Orders</td><td ><a href="home.aspx" className="btn btn-primary">New Order</a></td></tr></tbody></table></th>
</tr>
<tr className="hgHeaderRow">
<th fn="KxPMXSC5vLAXwbbPoxLEUA==" ft="s" fs="30" fc="" fnf="" fe="" fr="" fd="1" fb="" fde="" ftp="" fx="" fi="" fai="" fhe=""  className="js-sorter sortnew">Order No</th>
<th fn="A61jihwpfz0=" ft="s" fs="4000" fc="" fnf="" fe="" fr="" fd="" fb="" fde="" ftp="" fx="" fi="" fai="" fhe="" className="js-sorter sortnew">Order</th>

</tr>
</thead>
<tbody>
<tr kfv="18FdiZm7QMc=" className="hghighlight">
<td key="">28924</td>
<td key=""><table className="order"><tbody><tr className="hghighlight"><td><b>Results</b></td><td>
					<a href="#" className="btn btn-success"  onclick="OpenDoc('0E9DC589-B472-4929-A6FA-D99DF33AB678');">View / Print Results</a>
					&nbsp;&nbsp;					
					<a href="#" className="btn btn-primary" onclick="EmailResults('0E9DC589-B472-4929-A6FA-D99DF33AB678', 28924,'rammarbro658@gmail.com');">Email Results to rammarbro658@gmail.com</a>
				</td></tr><tr className=""><td>Test</td><td>COVID-19 RT-PCR Testing Next Day Results $99</td></tr>
				<tr className=""><td>Name</td><td><b>Dongol, Ramsudan Man Singh Dongol</b></td></tr>
				<tr className=""><td>DOB</td><td>April 19, 1986</td></tr>
				<tr className=""><td>Gender</td><td>Male</td></tr>
				<tr className=""><td>Result</td><td><b>NEGATIVE</b></td></tr>
				<tr className=""><td>Specimen</td><td>2105744-785A</td></tr>
				<tr className=""><td>Specimen Type</td><td> Nasal Swab Date Collected: May 24, 2021 12:48 UTC -8</td></tr>
				<tr className=""><td>Date Analyzed</td><td>  May 25, 2021 10:45 UTC -8</td></tr>
				
				<tr className=""><td>Description</td><td>Sample between the hours of 7:00am - 02:00pm. Results will be reported before the Next-Day 7:00 pm.</td></tr><tr><td>Cost</td><td>$99.00</td></tr><tr><td>Appointment</td><td>May 24 2021, 1:00 PM to 1:10 PM</td></tr><tr className=""><td>Status</td><td>Ready</td></tr><tr><td>Note</td><td>Result available</td></tr><tr><td colspan="2"><button type="button" className="btn btn-success" onclick="UpgradeTest(&quot;4A10474A-AF48-40EB-92B3-F94E0507F1CD&quot;)">Upgrade Test</button></td></tr><tr><td colspan="2"><a href="#" onclick="TestInstructions(this);" oid="4A10474A-AF48-40EB-92B3-F94E0507F1CD" className="btn btn-primary">Pick Up, Sampling and Drop Off Instructions</a></td></tr><tr><td colspan="2"><a href="#" onclick="EmailReceipt('4A10474A-AF48-40EB-92B3-F94E0507F1CD');" oid="4A10474A-AF48-40EB-92B3-F94E0507F1CD" className="btn btn-success">Email Receipt</a></td></tr></tbody></table></td>
</tr>

</tbody>
<tfoot>
</tfoot>
</table>
      </div>
    );
  }
}
 
export default Home;