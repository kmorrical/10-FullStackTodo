using System;
using System.Collections.Generic;
using System.Data.Entity;
using VSTDA.Api.Models;
using System.Linq;
using System.Web;

namespace VSTDA.Api.Infrastructure
{
    public class TodoDataContext : DbContext
        //Did I name this correctly?
    {
        public TodoDataContext() : base("Todoes")
        {

        }
        public IDbSet<Todo> Todoes { get; set; }
    }
}