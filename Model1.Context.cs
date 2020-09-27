﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Comm_App_Beta
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class Communication_DatabaseEntities : DbContext
    {
        public Communication_DatabaseEntities()
            : base("name=Communication_DatabaseEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<User_Repo> User_Repo { get; set; }
        public virtual DbSet<Interaction_Repo> Interaction_Repo { get; set; }
        public virtual DbSet<Message_Temp_Repo> Message_Temp_Repo { get; set; }
    
        public virtual int End_Convo(Nullable<int> user_ID)
        {
            var user_IDParameter = user_ID.HasValue ?
                new ObjectParameter("User_ID", user_ID) :
                new ObjectParameter("User_ID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("End_Convo", user_IDParameter);
        }
    
        public virtual int New_Message(Nullable<int> uer_ID, string message_Text)
        {
            var uer_IDParameter = uer_ID.HasValue ?
                new ObjectParameter("Uer_ID", uer_ID) :
                new ObjectParameter("Uer_ID", typeof(int));
    
            var message_TextParameter = message_Text != null ?
                new ObjectParameter("Message_Text", message_Text) :
                new ObjectParameter("Message_Text", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("New_Message", uer_IDParameter, message_TextParameter);
        }
    
        public virtual ObjectResult<Read_Message_Result> Read_Message(Nullable<int> user_ID)
        {
            var user_IDParameter = user_ID.HasValue ?
                new ObjectParameter("User_ID", user_ID) :
                new ObjectParameter("User_ID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Read_Message_Result>("Read_Message", user_IDParameter);
        }
    
        public virtual ObjectResult<Register_User_Result> Register_User(string first_Name, string last_Name)
        {
            var first_NameParameter = first_Name != null ?
                new ObjectParameter("First_Name", first_Name) :
                new ObjectParameter("First_Name", typeof(string));
    
            var last_NameParameter = last_Name != null ?
                new ObjectParameter("Last_Name", last_Name) :
                new ObjectParameter("Last_Name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Register_User_Result>("Register_User", first_NameParameter, last_NameParameter);
        }
    }
}
