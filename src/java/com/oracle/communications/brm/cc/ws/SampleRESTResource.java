
package com.oracle.communications.brm.cc.ws;

import com.oracle.communications.brm.cc.ws.Reference;

import javax.ws.rs.PathParam;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import java.sql.*;
import java.util.*;
import javax.naming.*;
import org.codehaus.jettison.json.JSONArray;

/**
 * Sample REST Web Service with basic examples.
 *
 */
@Path("sampleservice")
public class SampleRESTResource {

    /**
     * Creates a new instance of SampleRESTResource
     */
    public SampleRESTResource() {
    }

    /**
     * Simple web service that returns fixed welcome message.
     * @return 
     */
    @Path("/welcome")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public List<Reference> getWelcomeMessage() {
        
        Context ctx = null;
        Hashtable ht = new Hashtable();
        ht.put(Context.INITIAL_CONTEXT_FACTORY,
         "weblogic.jndi.WLInitialContextFactory");
        ht.put(Context.PROVIDER_URL,
         "t3://192.168.128.136:7001");
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        Integer ID=null;
        String CA_ID=null;
        String IME=null;
        String MSISDN=null;
        String PREZIME=null;
        String REFERENCA_RACUNA=null;
        String SIFRA_TEHNOLOGIJE=null;
        Integer TRANSACTION_ID=null;
        String WS_RESPONSE=null;
        List<Reference> references = new LinkedList<Reference>();
        
        try {
            ctx = new InitialContext(ht);
            javax.sql.DataSource ds 
            = (javax.sql.DataSource) ctx.lookup ("jdbc/BRM_smspayment");
            conn = ds.getConnection();
            // You can now use the conn object to create 
            //  Statements and retrieve result sets:
             stmt = conn.createStatement();
             rs=stmt.executeQuery("select * from check_reference");            
             
             
             while(rs.next()){
             Reference reference= new Reference();
             reference.setID(rs.getInt("ID"));
             reference.setCA_ID(rs.getString("CA_ID"));
             reference.setIME(rs.getString("IME"));
             reference.setMSISDN(rs.getString("MSISDN"));
             reference.setPREZIME(rs.getString("PREZIME"));
             reference.setREFERENCA_RACUNA(rs.getString("REFERENCA_RACUNA"));
             reference.setSIFRA_TEHNOLOGIJE(rs.getString("SIFRA_TEHNOLOGIJE"));
             reference.setID(rs.getInt("TRANSACTION_ID"));
             reference.setWS_RESPONSE(rs.getString("WS_RESPONSE"));
             references.add(reference);
             }
             
         //Close JDBC objects as soon as possible
             stmt.close();
             stmt=null;
             conn.close();
             conn=null;
            }
            catch (Exception e) {
            // a failure occurred
            System.out.println("error connection");
            }
            finally {    
                try { 
                    ctx.close(); 
                    } catch (Exception e) {System.out.println("error connection"); }
                try { 
                if (rs != null) rs.close(); 
                    } catch (Exception e) {System.out.println("error connection"); }
                try { 
                if (stmt != null) stmt.close(); 
                    } catch (Exception e) {System.out.println("error connection");}
                try { 
                    if (conn != null) conn.close(); 
                    } catch (Exception e) { System.out.println("error connection");}
                    }

            return references;
    }
    
    /**
     * This rest service is an example that takes PathParam as an argument.
     * For example : 
     * @param id
     * @return 
     */
    @Path("/echo/{id}")
    @GET
    @Produces({MediaType.TEXT_PLAIN})
    public String getDetails(@PathParam("id") String id) {
       return id;
    }
    
    /**
     * This rest service is an example that takes both PathParam and QueryParams as arguments.
     * @param id
     * @param starts
     * @param ends
     * @return 
     */
    @Path("/queryandpathparams/{id}")
    @GET
    @Produces({MediaType.TEXT_PLAIN})
    public String getAllDetails(@PathParam("id") String id, 
                             @QueryParam("starts") String starts,
                             @QueryParam("ends") String ends) {
       return id +"-"+ starts +"-"+ ends;
    }
    
}
