using System.Web.Mvc;

namespace MVVMWebAppTemplate.Areas.a
{
    public class aAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "a";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "a_default",
                "a/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}